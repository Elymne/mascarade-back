import express from 'express'
import router from './core/router/router.js'
import cors from './core/cors/cors.js'
import { logger } from './core/log/logger.js'
import bodyParser from 'body-parser'
import helmet from 'helmet'

// Set express app.
const app = express()

// Json parser.
app.use(bodyParser.json())

// Set cors.
app.use(cors())

// Use Helmet.
app.use(helmet())

// Set router.
app.use('/api/v1', router)

// Get port.
const port = parseInt(process.env.PORT ?? '3001', 10)

// Create server object to export.
const server = {
    start: () => {
        app.listen(port, () => {
            logger.toConsole.info(`Server is now listening on port ${port}!`)
        })
    },
}

export default server
