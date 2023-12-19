import { Request, Response } from "express";
const express = require('express')

const router = express.Router()

router.get('/users',(req: Request, res: Response) => {

    res.send('Todos los usuarios')
})

router.get('/users/:id',(req: Request, res: Response) => {

    res.send('Un usuario')
})

router.get('/users/active',(req: Request, res: Response) => {

    res.send('Usuarios activos')
})

router.get('/users/inactive',(req: Request, res: Response) => {

    res.send('Usuarios inactivos')
})

router.post('/users',(req: Request, res: Response) => {

    res.send('Añadir un usuario')
})

router.patch('/users',(req: Request, res: Response) => {

    res.send('Editar algun atributo del usuario')
})

export default router



