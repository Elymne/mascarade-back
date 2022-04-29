import { request } from 'express'
import { response } from 'express'
import { PgQuery, execQuery } from '../../core/db/pgconnect.mjs'
import logger from '../../core/log/logger.mjs'

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
        res.status(400).send(errors)
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
    }
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
        res.status(400).send(errors.stack)
    }
}
