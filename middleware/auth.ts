

import { Request, Response } from "express";
import { signToken, User } from "../services/login";
const express = require('express')
const router = express.Router()

router.post('/login', (req : Request, res: Response) => {
        
    const user : User = req.body
    const token = signToken(user)

    if(!token){
        return res.status(403).json({error: 'true', message:'user or password not correct'})
    }

    return res.json({userToken: token})

})


export default router
