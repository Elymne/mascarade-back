import { PgQuery, execQuery } from './../../core/db/pgconnect.js'
import { Candidate, factoryCandidate } from './candidate.js'

/**
 * Select all candidates from DB.
 * @returns {Promise<Candidate[]>}
 */
export const selectAll = async () => {
    const query = PgQuery('Get all candidates', 'SELECT * FROM candidate', [])
    const result = await execQuery(query)
    return result.rows.map((row) => factoryCandidate(row))
}

/**
 * Select a unique candidate from DB.
 * @param {Request} req
 * @return {Promise<Candidate[]>}
 */
export const selectOneById = async (id) => {
    const query = PgQuery('Get one candidates', 'SELECT * FROM candidate WHERE candidate.id = $1', [req.params.id])
    const result = await execQuery(query)
    return result.rows.map((row) => factoryCandidate(row))
}

/**
 * Insert a candidate into DB.
 * @param {Request} req
 * @return {Promise<Candidate>}
 */
export const insertCandidate = async (req) => {
    const candidate = factoryCandidate(req.params.id, req.body.firstname, req.body.surname)
    const query = PgQuery('Add candidate', 'INSERT INTO candidate VALUES ($1,$2,$3)', [candidate.id, candidate.firstname, candidate.surname])
    await execQuery(query)
    return candidate
}

/**
 * Update a candidate from DB.
 * @param {Request} req
 * @return {Promise<Candidate>}
 */
export const updateCandidate = async (req) => {
    const candidate = factoryCandidate(req.params.id, req.body.firstname, req.body.surname)
    const query = PgQuery('Update candidate', 'UPDATE candidate SET firstname = $1, surname = $2 WHERE id = $3', [
        candidate.firstname,
        candidate.surname,
        candidate.id,
    ])
    await execQuery(query)
    return candidate
}

/**
 * Delete a candidate from DB.
 * @param {Request} req
 * @return {Promise<Candidate>}
 */
export const delCandidate = async (req) => {
    const query = PgQuery('Delete candidate', 'DELETE FROM candidate WHERE id = $1 RETURNING *', [req.params.id])
    const result = await execQuery(query)
    return result.rows
}
