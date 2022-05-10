import express from 'express'
import { getAllCandidates, getOneCandidate, addCandidate, updateCandidate, getAllCandidatesOrdered } from './controller.js'

const router = express.Router()

router.get('/', getAllCandidates)
router.get('/ordered', getAllCandidatesOrdered)
router.get('/:id', getOneCandidate)
router.post('/', addCandidate)
router.put('/:id', getAllCandidates)

export default router
