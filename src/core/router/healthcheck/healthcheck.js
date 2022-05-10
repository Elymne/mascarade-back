import expressHealthcheck from 'express-healthcheck'
import express from 'express'

const router = express.Router()

router.get(
    '/',
    expressHealthcheck({
        healthy: () => {
            message: 'ExpressJS web service is up and running'
        },
    }),
)

export default router
