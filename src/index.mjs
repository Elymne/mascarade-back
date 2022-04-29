import dotenv from 'dotenv'
import express from 'express'
import routing from './core/routing.mjs'

// Set dotenv.
dotenv.config()

// Get env.
const port = process.env.PORT || 3001

// Launch express.
const app = express()

// Set routing.
routing(app)

// Laucnh server.
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
