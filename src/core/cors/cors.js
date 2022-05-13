import cors from 'cors'

/**
 * Return cors but check env before.
 * @return {cors}
 */
export default () => {
    const env = process.env.PORT ?? 'DEV'
    if (env == 'DEV') {
        return cors()
    }
    return cors({
        origin: process.env.ORIGIN ?? null,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
}
