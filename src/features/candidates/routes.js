import express from 'express'
import { getAllCandidates, getOneCandidate, addOneCandidate } from './controller.js'

const router = express.Router()

router.get('/', getAllCandidates)
router.get('/:id', getOneCandidate)

export default router
