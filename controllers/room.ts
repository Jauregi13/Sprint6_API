import { Request, Response } from "express";
import { getRooms, getRoomById, getRoomsAvailable, getRoomsBooked, addRoom, deleteRoom, updateRoom } from "../services/room";

const express = require('express')
const router = express.Router()

router.get('/rooms', async (req : Request,res : Response) => {
    
    res.json(await getRooms());
})

/*router.get('/rooms/available', (req : Request,res : Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(getRoomsAvailable())
})

router.get('/rooms/booked', (req : Request,res : Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(getRoomsBooked())
})*/

router.get('/rooms/:id', async (req: Request, res: Response) => {

    const roomId = await getRoomById(req.params.id)
    if(roomId){
        res.json(roomId)
    }
    else {
        res.status(406).send('No se encuentra esa habitación')
    }
    
})

router.post('/rooms', async (req: Request, res: Response) => {

    try {
        await addRoom(req.body)
    
        res.send('Habitación añadida correctamente')
    } catch (error) {
        res.status(500).send('Error al añadir habitación: ' + error);
    }
    
})

router.delete('/rooms', async (req: Request, res: Response) => {

    try {

        const roomDeleted = await deleteRoom(req.body.id)

        if(roomDeleted?.affectedRows === 1){
            res.send('Habitación eliminada correctamente')
        }
        else {
            res.send('No se encuentra el id de habitación')
        }
        
    } catch (error) {
        res.status(500).send('Error al eliminar la habitación');
    }

    
})

router.patch('/rooms', async (req: Request, res: Response) => {

    try {

        const roomUpdated = await updateRoom(req.body)
        
        if(roomUpdated?.affectedRows === 1){
            res.send('Habitación actualizada correctamente')
        }
        else {
            res.send('No se encuentra el id de habitación')
        }
        
    } catch (error) {
        res.status(500).send('Error al actualizar la habitación');
    }

    
})

export default router