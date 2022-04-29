import dotenv from 'dotenv'
import express from 'express'
import routing from './core/router/routing.mjs'
import logger from './core/log/logger.mjs'

// Set dotenv.
dotenv.config()

// Get env.
const port = process.env.PORT || 3001

// Launch express.
const app = express()

// Set routing.
routing(app)

// Laucnh server.
app.listen(port, () => {
    logger.toConsole.info(`Server is now listening on port ${port}!`)
})
