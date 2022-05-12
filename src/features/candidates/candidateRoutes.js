import express from 'express'
import { getCandidates, getCandidate, postCandidate, putCandidate, deleteCandidate, getAllCandidatesOrdered } from './candidateController.js'

const router = express.Router()

router.get('/', getCandidates)
router.get('/:id', getCandidate)
router.post('/', postCandidate)
router.put('/:id', putCandidate)
router.delete('/:id', deleteCandidate)
router.get('/ordered', getAllCandidatesOrdered)

export default router
