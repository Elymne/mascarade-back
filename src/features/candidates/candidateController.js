import { logger } from '../../core/log/logger.js'
import { Candidate } from './candidate.js'
import { delCandidate, insertCandidate, selectAllCandidates, selectOneCandidateById, updateCandidate } from './candidateQuery.js'

/**
 * Callback function.
 * @param {Request} req
 * @param {Response} res
 */
export const getCandidates = async (req, res) => {
    try {
        res.status(200).json(await selectAllCandidates())
    } catch (errors) {
        res.status(500).send(errors)
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
    }
}

/**
 * Callback function.
 * @param {Request} req
 * @param {Response} res
 */
export const getCandidate = async (req, res) => {
    try {
        const result = await selectOneCandidateById(req.params.id)
        if (!result) {
            logger.toConsole.info(`A candidate with id [${req.params.id}] was queried but does not exists`)
            logger.toFile.info(`A candidate with id [${req.params.id}] was queried but does not exists`)
            res.status(404).send('Candidate not found with this id.')
            return
        }
        res.status(200).json(result)
    } catch (errors) {
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
        res.status(500).send(errors.stack)
    }
}

/**
 * Callback function.
 * @param {Request} req
 * @param {Response} res
 */
export const postCandidate = async (req, res) => {
    try {
        const result = await insertCandidate({ id: uuid(), firstname: req.body.firstname, surname: req.body.surname })
        res.status(201).json(result)
    } catch (errors) {
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
        res.status(500).send(errors.stack)
    }
}

/**
 * Callback function.
 * @param {Request} req
 * @param {Response} res
 */
export const putCandidate = async (req, res) => {
    try {
        const result = await updateCandidate({ id: req.body.id, firstname: req.body.firstname, surname: req.body.surname })
        res.status(200).json(result)
    } catch (errors) {
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
        res.status(500).send(errors.stack)
    }
}

/**
 * Callback function.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteCandidate = async (req, res) => {
    try {
        const result = await delCandidate(req)
        res.status(200).json(result)
    } catch (errors) {
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
        res.status(500).send(errors.stack)
    }
}

/**
 * Callback function.
 * Get all data from candidates table from DB.
 * Ordering candidate by score (votes).
 * @param {Request} req
 * @param {Response} res
 */
export const getAllCandidatesOrdered = async (req, res) => {
    res.status(501).send('Not implemented yet')
}
