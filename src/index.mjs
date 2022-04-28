import dotenv from 'dotenv'
import express from 'express'
import candidateRoutes from './features/candidates/routes.mjs'
import healthcheck from './core/healthcheck.mjs'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

// Basic route.
app.get('/', (req, res) => res.send('Hello World, from express'))

// Candidates routes.
candidateRoutes(app)

// Healthcheck route.
healthcheck(app)

// Laucnh server.
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

const router = express.Router()
app.use('api/', router)
