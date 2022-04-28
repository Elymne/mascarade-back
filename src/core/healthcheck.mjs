import expressHealthcheck from 'express-healthcheck'

/**
 * Export basic healthcare route.
 * @param {Express} app
 */
export default (app) => {
    app.use(
        '/health',
        expressHealthcheck({
            healthy: () => {
                message: 'ExpressJS web service is up and running'
            },
        }),
    )
}
