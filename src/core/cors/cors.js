import cors from 'cors'

export default cors({
    origin: process.env.ORIGIN ?? null,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
})
