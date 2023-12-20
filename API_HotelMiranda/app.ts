import roomRouter from './controllers/room'
import bookingRouter from './controllers/booking'
import userRouter from './controllers/user'
import contactRouter from './controllers/contact'
import loginRouter from './middleware/auth'
import { NextFunction, Request, Response } from 'express'
import { authenticateToken } from './services/login'

const express = require('express')
export const app = express()
app.use(express.json());

app.use('/', loginRouter)

app.use(authenticateToken)

app.use('/',roomRouter)
app.use('/', bookingRouter)
app.use('/',userRouter)
app.use('/',contactRouter)



