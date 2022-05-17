import { Voter } from './voter.js'
import { v4 as uuid } from 'uuid'

/**
 * Select all candidates from DB.
 * @returns {Promise<Voter[]>}
 */
export const selectAllVoters = async () => {
    const query = createQuery('Get all voters', 'SELECT * FROM voter', [])
    const result = await execQuery(query)
    return result.rows
}

/**
 * Select a unique voter from DB.
 * @param {uuid} id
 * @return {Promise<Voter>|Promise<null>}
 */
export const selectOneVoterById = async (id) => {
    const query = createQuery('Get one voter', 'SELECT * FROM voter WHERE candidate.id = $1', [req.params.id])
    const result = await execQuery(query)
    if (result.rows.lenght != 0) return result.rows[0]
    return null
}

/**
 * Insert a candidate into DB.
 * @param {Voter} voter
 * @return {Promise<Voter>}
 */
export const insertVoter = async (voter) => {
    const query = createQuery('Add voter', 'INSERT INTO voter VALUES ($1,$2)', [voter.id, voter.idFrc])
    await execQuery(query)
    return voter
}

/**
 * Update a voter from DB.
 * @param {Voter} voter
 * @return {Promise<Candidate>}
 */
export const updateVoter = async (voter) => {
    const query = createQuery('Update voter', 'UPDATE voter SET idFrc = $1 WHERE id = $2', [voter.idFrc, voter.id])
    await execQuery(query)
    return voter
}

/**
 * Delete a voter from DB.
 * @param {uuid} id
 * @return {Promise<Candidate>}
 */
export const delVoter = async (id) => {
    const query = createQuery('Delete voter', 'DELETE FROM voter WHERE id = $1 RETURNING *', [id])
    const result = await execQuery(query)
    return result.rows
}
