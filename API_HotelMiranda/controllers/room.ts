import { Request, Response } from "express";
const express = require('express')

const router = express.Router()

router.get('/rooms', (req : Request,res : Response) => {

    res.send('rooms')
})

router.get('/rooms/:id', (req: Request, res: Response) => {
    res.send('una room')
})

router.get('/rooms/available', (req : Request,res : Response) => {

    res.send('Available rooms')
})

router.get('/rooms/booked', (req : Request,res : Response) => {

    res.send('Booked rooms')
})

router.post('/rooms', (req: Request, res: Response) => {
    res.send('Crear room')
})

router.delete('/rooms', (req: Request, res: Response) => {
    res.send('Eliminar room')
})

router.patch('/rooms', (req: Request, res: Response) => {
    res.send('Actualizar algun atributo de room')
})

export default router