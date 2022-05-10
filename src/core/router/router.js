import express from 'express'
import swaggerRoute from './swagger/swagger.js'
import healthcheckRoute from './healthcheck/healthcheck.js'
import candidateRoutes from '../../features/candidates/routes.js'

const router = express.Router()

router.get('/', async (req, res) => res.send('Hello World, from express'))
router.use('/api-docs', swaggerRoute)
router.use('/health', healthcheckRoute)
router.use('/candidates', candidateRoutes)

export default router
