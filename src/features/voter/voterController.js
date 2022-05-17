import { delVoter, insertVoter, selectAllVoters, selectOneVoterById, updateVoter } from './voterQuery.js'

/**
 * Callback function.
 * @param {Request} req
 * @param {Response} res
 */
export const getVoters = async (req, res) => {
    try {
        res.status(200).json(await selectAllVoters())
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
export const getVoter = async (req, res) => {
    try {
        const result = await selectOneVoterById(req.params.id)
        if (!result) {
            logger.toConsole.info(`A Voter with id [${req.params.id}] was queried but does not exists`)
            logger.toFile.info(`A Voter with id [${req.params.id}] was queried but does not exists`)
            res.status(404).send('Voter not found with this id.')
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
export const postVoter = async (req, res) => {
    try {
        const result = await insertVoter({ id: uuid(), firstname: req.body.idFrc })
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
export const putVoter = async (req, res) => {
    try {
        const result = await updateVoter({ id: req.body.id, firstname: req.body.idFrc })
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
export const deleteVoter = async (req, res) => {
    try {
        const result = await delVoter(req.params.id)
        res.status(200).json(result)
    } catch (errors) {
        logger.toConsole.error(errors)
        logger.toFile.error(errors)
        res.status(500).send(errors.stack)
    }
}
