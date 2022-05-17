import { createQuery, execQuery } from './../../core/db/pgconnect.js'
import { Candidate } from './candidate.js'
import { v4 as uuid } from 'uuid'

/**
 * Select all candidates from DB.
 * @returns {Promise<Candidate[]>}
 */
export const selectAllCandidates = async () => {
    const query = createQuery('Get all candidates', 'SELECT * FROM candidate', [])
    const result = await execQuery(query)
    return result.rows
}

/**
 * Select a unique candidate from DB.
 * @param {uuid} id
 * @return {Promise<Candidate>|Promise<null>}
 */
export const selectOneCandidateById = async (id) => {
    const query = createQuery('Get one candidates', 'SELECT * FROM candidate WHERE candidate.id = $1', [id])
    const result = await execQuery(query)
    if (result.rows.lenght != 0) return result.rows[0]
    return null
}

/**
 * Insert a candidate into DB.
 * @param {Candidate} candidate
 * @return {Promise<Candidate>}
 */
export const insertCandidate = async (candidate) => {
    const query = createQuery('Add candidate', 'INSERT INTO candidate VALUES ($1,$2,$3)', [candidate.id, candidate.firstname, candidate.surname])
    await execQuery(query)
    return candidate
}

/**
 * Update a candidate from DB.
 * @param {Candidate} candidate
 * @return {Promise<Candidate>}
 */
export const updateCandidate = async (candidate) => {
    const query = createQuery('Update candidate', 'UPDATE candidate SET firstname = $1, surname = $2 WHERE id = $3', [
        candidate.firstname,
        candidate.surname,
        candidate.id,
    ])
    await execQuery(query)
    return candidate
}

/**
 * Delete a candidate from DB.
 * @param {uuid} id
 * @return {Promise<Candidate>}
 */
export const delCandidate = async (id) => {
    const query = createQuery('Delete candidate', 'DELETE FROM candidate WHERE id = $1 RETURNING *', [id])
    const result = await execQuery(query)
    return result.rows
}
