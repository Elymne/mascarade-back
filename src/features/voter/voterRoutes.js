import express from 'express'
import { deleteVoter, getVoter, getVoters, postVoter, putVoter } from './voterController.js'

const router = express.Router()

router.get('/', getVoters)
router.get('/:id', getVoter)
router.post('/', postVoter)
router.put('/', putVoter)
router.delete('/:id', deleteVoter)

export default router
