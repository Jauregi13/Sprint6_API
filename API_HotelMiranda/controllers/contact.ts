import { Request, Response } from "express";
import { getArchivedContact, getContactById, getContacts, getPublishedContact } from "../services/contact";
const express = require('express')

const router = express.Router()

router.get('/contacts', (req: Request, res: Response) => {

    res.send(getContacts())
})

router.get('/contacts/:id', (req: Request, res: Response) => {

    if(getContactById(req.params.id)){
        res.send(getContactById(req.params.id))
    }
    else {
        res.status(406).send('No existe el review con ese id')
    }
})

router.get('/contacts/published', (req: Request, res: Response) => {

    res.send(getPublishedContact())
})

router.get('/contacts/archived', (req: Request, res: Response) => {

    res.send(getArchivedContact())
})

router.post('/contacts', (req: Request, res: Response) => {

    res.send('Nuevo review añadido correctamente')
})

router.patch('/contacts/:id/archive', (req: Request, res: Response) => {

    res.send('Review archivado')
})

router.patch('/contacts/:id/published', (req: Request, res: Response) => {

    res.send('Review publicado')
})


export default router

