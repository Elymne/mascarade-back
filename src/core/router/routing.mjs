import candidateRoutes from '../../features/candidates/routes.mjs'
import healthcheck from './healthcheck.mjs'

/**
 * Declare routes here.
 * @param {Express} app
 */
export default (app) => {
    // Basic route.
    app.get('/', async (req, res) => res.send('Hello World, from express'))

    // Candidate routing.
    candidateRoutes(app)

    // Healthchek routing.
    healthcheck(app)
}
