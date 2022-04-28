import { request } from 'express'
import { response } from 'express'
import pkg from 'pg'

const { Pool, Client } = pkg

/**
 * Callback function.
 * Get all data from candidates table from DB.
 * @param {request} req
 * @param {response} res
 */
export const getAllCandidates = async (req, res) => {
    const pool = new Pool()
    try {
        const result = await pool.query('SELECT * FROM candidate')
        pool.end()
        res.status(200).json(result.fields)
    } catch (errors) {
        res.status(400).send(errors)
    }
}
