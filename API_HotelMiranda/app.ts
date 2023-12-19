import roomRouter from './controllers/room'
import bookingRouter from './controllers/booking'
import { NextFunction, Request, Response } from 'express'
const express = require('express')
export const app = express()


app.use('/',roomRouter)
app.use('/', bookingRouter)



