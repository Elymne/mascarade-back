import { PgQuery, execQuery } from '../../core/db/pgconnect.js'
import { logger } from '../../core/log/logger.js'
import { v4 as uuidv4 } from 'uuid'

/**
 * Callback function.
 * Get all data from candidates table from DB.
 * @param {request} req
 * @param {response} res
 */
export const getAllCandidates = async (req, res) => {
    const query = PgQuery('Get all candidates', 'SELECT * FROM candidate', [])
    try {
        const result = await execQuery(query)
        res.status(200).json(result.rows)
    } catch (errors) {
        res.status(500).send(errors)
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
    }
}

/**
 * Callback function.
 * Get all data from candidates table from DB.
 * Ordering candidate by score (votes).
 * @param {request} req
 * @param {response} res
 */
export const getAllCandidatesOrdered = async (req, res) => {
    res.status(501).send('Not implemented yet')
}

/**
 * Callback function.
 * Get one specific candidate from DB.
 * @param {request} req
 * @param {response} res
 */
export const getOneCandidate = async (req, res) => {
    const query = PgQuery('Get all candidates', 'SELECT * FROM candidate WHERE candidate.id = $1', [req.params.id])
    try {
        const result = await execQuery(query)
        if (!result.rows.length) {
            logger.toConsole.info(`A candidate with id [${req.params.id}] was queried but does not exists`)
            logger.toFile.info(`A candidate with id [${req.params.id}] was queried but does not exists`)
            res.status(404).send('Candidate not found with this id.')
            return
        }
        res.status(200).json(result.rows[0])
    } catch (errors) {
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
        res.status(500).send(errors.stack)
    }
}

/**
 * Callback function.
 * Add candidate from DB.
 * @param {request} req
 * @param {response} res
 */
export const addCandidate = async (req, res) => {
    const query = PgQuery('INSERT INTO candidate VALUES ($1,$2,$3)', [uuidv4(), req.body.firstname, req.body.surname])
    try {
        const result = await execQuery(query)
        res.status(201).json(result)
    } catch (error) {
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
        res.status(500).send(errors.stack)
    }
}

/**
 * Callback function.
 * Update candidate from DB.
 * @param {request} req
 * @param {response} res
 */
export const updateCandidate = async (req, res) => {
    res.status(501).send('Not implemented yet')
}
