import { Request, Response } from "express";
import { addReview, getContactById, getContacts, updateReview } from "../services/contact";
const express = require('express')

const router = express.Router()

router.get('/contacts', async (req: Request, res: Response) => {

    await res.send(getContacts())
})

router.get('/contacts/:id', async (req: Request, res: Response) => {

    const review = await getContactById(req.params.id)
    if(review){
        res.send(review)
    }
    else {
        res.status(406).send('No existe el review con ese id')
    }
})

router.post('/contacts', async (req: Request, res: Response) => {

    try {

        await addReview(req.body)

        res.send('Nuevo review añadido correctamente')

        
    } catch (error) {
        res.status(406).send('Error al añadir la review')
    }

    
})

router.patch('/contacts/', async (req: Request, res: Response) => {

    try {

        await updateReview(req.body)

        res.send('Review actualizado')
        
    } catch (error) {
        res.status(500).send('Error al actualizar la review')
    }
    
})


export default router

