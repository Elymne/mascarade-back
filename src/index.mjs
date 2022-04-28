import dotenv from 'dotenv'
import express from 'express'
import routing from './core/routing.mjs'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

// Set routing.
routing(app)

// Laucnh server.
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
