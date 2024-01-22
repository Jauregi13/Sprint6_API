import { Request, Response } from "express";
import { addBooking, deleteBooking, getBookingById, getBookings, updateBooking } from "../services/booking";
const express = require('express')

const router = express.Router()

router.get('/bookings', async (req : Request,res : Response) => {

    res.json(await getBookings())
})

router.get('/bookings/:id', async (req : Request,res : Response) => {

    const booking = await getBookingById(req.params.id)

    if(booking?.length !== 0){
        res.json(booking)
    }
    else {
        res.status(406).send('No existe ninguna reserva con ese id')
    }

    
})

/*router.get('/bookings/checkIn', (req : Request,res : Response) => {

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
})*/

router.post('/bookings', async (req : Request,res : Response) => {

    try {

        await addBooking(req.body)

        res.send('Reserva creada correctamente')
        
    } catch (error) {
        res.status(500).send('Error al añadir la reserva: '+ error);
    }
    
})

router.delete('/bookings', async (req : Request,res : Response) => {

    try {

        const bookingDeleted = await deleteBooking(req.body.id)

        if(bookingDeleted?.affectedRows === 1){
            res.send('Reserva eliminada correctamente')
        }
        else {
            res.send('Id de reserva no existe')
        }
        
        
    } catch (error) {
        res.status(500).send('Error al eliminar la reserva')
    }

    
})

router.patch('/bookings', async (req : Request,res : Response) => {

    try {

        const bookingUpdated = await updateBooking(req.body)

        if(bookingUpdated?.affectedRows === 1){
            res.send('Reserva actualizada correctamente')
        }
        else {
            res.send('Id de reserva no existe')
        }
        
    } catch (error) {
        res.status(500).send('Error al actualizar la reserva')
    }

    
})

export default router