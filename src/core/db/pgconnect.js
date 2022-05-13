import postgresqlConnect from 'pg'
const { Pool } = postgresqlConnect
const pool = new Pool()

/**
 * @typedef {Object} PgQuery
 * @property {string} name
 * @property {string} text
 * @property {Array<string|int>} value
 */
export const PgQuery = Object

/**
 * Prepare a query statement.
 * @param {string} name
 * @param {string} text
 * @param {Array<string|int>} value
 * @return {PgQuery}
 */
export const createQuery = (name, text, values) => {
    return {
        name: name,
        text: text,
        values: values,
    }
}

/**
 * Use it to make a query from db.
 * @param {PgQuery} query
 * @return {Promise<postgresqlConnect.Submittable>}
 */
export const execQuery = async (query) => {
    const result = pool.query(query)
    return result
}
