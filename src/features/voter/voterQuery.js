import { factoryVoter, Voter } from './voter'

/**
 * Select all candidates from DB.
 * @returns {Promise<Voter[]>}
 */
export const selectAllVoters = async () => {
    const query = createQuery('Get all voters', 'SELECT * FROM voter', [])
    const result = await execQuery(query)
    return result.rows.map((row) => factoryVoter(row))
}

/**
 * Select a unique voter from DB.
 * @param {Request} req
 * @return {Promise<Voter[]>}
 */
export const selectOneVoterById = async (id) => {
    const query = createQuery('Get one voter', 'SELECT * FROM voter WHERE candidate.id = $1', [req.params.id])
    const result = await execQuery(query)
    return result.rows.map((row) => factoryVoter(row))
}

/**
 * Insert a candidate into DB.
 * @param {Request} req
 * @return {Promise<Voter>}
 */
export const insertVoter = async (req) => {
    const candidate = factoryVoter(req.body.id, req.body.idFrc)
    const query = createQuery('Add candidate', 'INSERT INTO candidate VALUES ($1,$2,$3)', [candidate.id, candidate.firstname, candidate.surname])
    await execQuery(query)
    return candidate
}
