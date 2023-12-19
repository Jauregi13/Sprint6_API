import { Request, Response } from "express";
import { getRooms, getRoomById, getRoomsAvailable, getRoomsBooked } from "../services/room";

const express = require('express')
const router = express.Router()

router.get('/rooms', (req : Request,res : Response) => {
    
    res.setHeader('Content-Type', 'application/json')
    res.send(getRooms());
})

router.get('/rooms/available', (req : Request,res : Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(getRoomsAvailable())
})

router.get('/rooms/booked', (req : Request,res : Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(getRoomsBooked())
})

router.get('/rooms/:id', (req: Request, res: Response) => {

    res.setHeader('Content-Type', 'application/json')
    
    if(getRoomById(req.params.id)){
        res.send(getRoomById(req.params.id))
    }
    else {
        res.status(406).send('No se encuentra esa habitación')
    }
    
})

router.post('/rooms', (req: Request, res: Response) => {
    
    res.send('Habitación añadida correctamente')
})

router.delete('/rooms', (req: Request, res: Response) => {

    res.send('Habitación eliminada correctamente')
})

router.patch('/rooms', (req: Request, res: Response) => {

    res.send('Habitación actualizada correctamente')
})

export default router