import { Request, Response } from "express";
import { addBooking, deleteBooking, getBookingById, getBookings, updateBooking } from "../services/booking";
const express = require('express')

const router = express.Router()

router.get('/bookings', async (req : Request,res : Response) => {

    res.json(await getBookings())
})

router.get('/bookings/:id', async (req : Request,res : Response) => {

    const booking = await getBookingById(req.params.id)

    if(booking){
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
        res.status(500).send(error);
    }
    
})

router.delete('/bookings', async (req : Request,res : Response) => {

    try {

        const bookingDeleted = await deleteBooking(req.body.id)

        if(bookingDeleted){
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

        if(bookingUpdated){
            res.json({
                'success' : true,
                'message' : 'Reserva actualizada correctamente'
            })
        }
        else {
            res.json({
                'success' : false,
                'message' : 'Id de reserva no existe'
            })
        }
        
    } catch (error) {
        res.status(500).json('Error al actualizar la reserva')
    }

    
})

export default router