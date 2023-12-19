import { Request, Response } from "express";
const express = require('express')

const router = express.Router()

router.get('/contacts', (req: Request, res: Response) => {

    res.send('contacts')
})

router.get('/contacts/:id', (req: Request, res: Response) => {

    res.send('un contact')
})

router.get('/contacts/published', (req: Request, res: Response) => {

    res.send('published contacts')
})

router.get('/contacts/archived', (req: Request, res: Response) => {

    res.send('archived contacts')
})

router.post('/contacts', (req: Request, res: Response) => {

    res.send('añadir un review')
})

router.patch('/contacts/:id/archive', (req: Request, res: Response) => {

    res.send('archivar review')
})

router.patch('/contacts/:id/published', (req: Request, res: Response) => {

    res.send('publicar review')
})


export default router

