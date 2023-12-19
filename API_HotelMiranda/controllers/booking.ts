import { Request, Response } from "express";
const express = require('express')

const router = express.Router()

router.get('/bookings', (req : Request,res : Response) => {

    res.send('Todas las bookings')
})

router.get('/bookings/:id', (req : Request,res : Response) => {

    res.send('Una booking')
})

router.get('/bookings/checkIn', (req : Request,res : Response) => {

    res.send('Check In bookings')
})

router.get('/bookings/checkOut', (req : Request,res : Response) => {

    res.send('Check Out bookings')
})

router.get('/bookings/inProgress', (req : Request,res : Response) => {

    res.send('Bookings in progress')
})

router.post('/bookings', (req : Request,res : Response) => {

    res.send('Añadir booking')
})

router.delete('/bookings', (req : Request,res : Response) => {

    res.send('Eliminar booking')
})

router.patch('/bookings', (req : Request,res : Response) => {

    res.send('Editar algún atributo de booking')
})

export default router