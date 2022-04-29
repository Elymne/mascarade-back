import postgresqlConnect from 'pg'
const { Pool } = postgresqlConnect
const pool = new Pool()

/**
 * Create and return a query body.
 * @param {string} name
 * @param {string} text
 * @param {Array<string|int>} values
 * @constructor - I cheat here. Want to have Struct like in C programming for example.
 */
export const PgQuery = (name, text, values) => {
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
