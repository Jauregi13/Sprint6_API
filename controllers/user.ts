import { Request, Response } from "express";
import { addUser, deleteUser, getUserById, getUsers, updateUser } from "../services/user";
const express = require('express')

const router = express.Router()

router.get('/users', async (req: Request, res: Response) => {

    res.json(await getUsers())
})

router.get('/users/:id', async (req: Request, res: Response) => {

    const userId = await getUserById(req.params.id) 

    if(userId){
        res.json(userId)
    }
    else {
        res.status(406).send('No existe ningun usuario con ese id')
    }    
})

/*router.get('/users/active',(req: Request, res: Response) => {

    res.send(getActiveUsers())
})

router.get('/users/inactive',(req: Request, res: Response) => {

    res.send(getInactiveUsers())
})*/

router.post('/users',async (req: Request, res: Response) => {

    try {

        await addUser(req.body)

        res.send('Usuario añadido correctamente')
        
    } catch (error) {
        
        res.status(500).send('Error al añadir usuario');
    }
})

router.patch('/users',async (req: Request, res: Response) => {

    try {
        

        const userUpdated = await updateUser(req.body)
        

        if(userUpdated != null){
            res.send('Usuario actualizado correctamente')
        }
        else {
            res.send('El id de usuario no existe')
        }
        
    } catch (error) {
        res.status(500).send('Error al actualizar el usuario');
    }

    
})

router.delete('/users', async (req: Request, res: Response) => {

    try {

        const userDeleted = await deleteUser(req.body.id)

        if(userDeleted != null){
            res.send('Usuario eliminado correctamente')
        }
        else {
            res.send('No existe ese id de usuario')
        }
        
    } catch (error) {
        res.status(500).send('Error al eliminar el usuario');
    }

    
})

export default router



