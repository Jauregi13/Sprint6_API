import { Request, Response } from "express";
import { getBookingById, getBookings, getBookingsCheckIn, getBookingsCheckOut, getBookingsInProgress } from "../services/booking";
const express = require('express')

const router = express.Router()

router.get('/bookings', (req : Request,res : Response) => {

    res.setHeader('Content-Type', 'application/json')
    res.send(getBookings())
})

router.get('/bookings/:id', (req : Request,res : Response) => {

    res.setHeader('Content-Type', 'application/json')
    if(getBookingById(req.params.id)){
        res.send(getBookingById(req.params.id))
    }
    else {
        res.status(406).send('No existe ninguna reserva con ese id')
    }

    
})

router.get('/bookings/checkIn', (req : Request,res : Response) => {

    res.setHeader('Content-Type', 'application/json')
    res.send(getBookingsCheckIn())
})

router.get('/bookings/checkOut', (req : Request,res : Response) => {

    res.setHeader('Content-Type', 'application/json')
    res.send(getBookingsCheckOut())
})

router.get('/bookings/inProgress', (req : Request,res : Response) => {

    res.setHeader('Content-Type', 'application/json')
    res.send(getBookingsInProgress())
})

router.post('/bookings', (req : Request,res : Response) => {

    res.send('Reserva creada correctamente')
})

router.delete('/bookings', (req : Request,res : Response) => {

    res.send('Reserva eliminada correctamente')
})

router.patch('/bookings', (req : Request,res : Response) => {

    res.send('Reserva actualizada correctamente')
})

export default router