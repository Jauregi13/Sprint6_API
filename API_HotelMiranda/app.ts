import roomRouter from './controllers/room'
import bookingRouter from './controllers/booking'
import userRouter from './controllers/user'
import contactRouter from './controllers/contact'
import { NextFunction, Request, Response } from 'express'
const express = require('express')
export const app = express()
app.use(express.json());

app.use('/',roomRouter)
app.use('/', bookingRouter)
app.use('/',userRouter)
app.use('/',contactRouter)



