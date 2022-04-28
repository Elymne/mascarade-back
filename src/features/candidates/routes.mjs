import * as controller from './controller.mjs'

/**
 * List of all routes for candidates actions.
 * @param {Express} app
 */
export default (app) => {
    app.route('/candidates').get(controller.getAllCandidates)
}
