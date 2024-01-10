import roomRouter from './controllers/room'
import bookingRouter from './controllers/booking'
import userRouter from './controllers/user'
import contactRouter from './controllers/contact'
import loginRouter from './middleware/auth'
import { Request, Response } from 'express'
import listEndpoints from 'express-list-endpoints'
import { authenticateToken } from './services/login'
import { connectionMongo } from './connectionMongo'

const express = require('express')
export const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({ path: `.env.local`, override: true })
const port = 3000


connectionMongo()

app.use(cors())

app.use(express.json());

app.use('/', loginRouter)

app.get('/', (_req: Request, res: Response) => {

    res.json({nameHotel: 'Hotel Miranda API', endpoints: listEndpoints(app)})
})

app.use(authenticateToken)

app.use('/', roomRouter)
app.use('/', bookingRouter)
app.use('/',userRouter)
app.use('/',contactRouter)

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
})




