import { Request, Response } from "express";
import { getActiveUsers, getInactiveUsers, getUserById, getUsers } from "../services/user";
const express = require('express')

const router = express.Router()

router.get('/users',(req: Request, res: Response) => {

    res.setHeader('Content-Type', 'application/json')
    res.send(getUsers())
})

router.get('/users/:id',(req: Request, res: Response) => {

    res.setHeader('Content-Type', 'application/json')
    if(res.send(getUserById(req.params.id))){
        res.send(getUserById(req.params.id))
    }
    else {
        res.status(406).send('No existe ningun usuario con ese id')
    }    
})

router.get('/users/active',(req: Request, res: Response) => {

    res.send(getActiveUsers())
})

router.get('/users/inactive',(req: Request, res: Response) => {

    res.send(getInactiveUsers())
})

router.post('/users',(req: Request, res: Response) => {

    res.send('Usuario añadido correctamente')
})

router.patch('/users',(req: Request, res: Response) => {

    res.send('Usuario actualizado correctamente')
})

router.delete('/users',(req: Request, res: Response) => {

    res.send('Usuario eliminado correctamente')
})

export default router



