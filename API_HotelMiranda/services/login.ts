import { NextFunction , Request, Response} from "express"

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const user = 'admin'
const password = 'admin'

export interface User {
    user : string
    password : string
}


export const signToken = (username : User) : string | undefined => {
    
    if(username.user === user && username.password === password){
                
        return jwt.sign(username,process.env.TOKEN_SECRET, { expiresIn: 300})
    } 
}

export const authenticateToken = (req : Request,res : Response,next : NextFunction) => {

    try {

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) return res.status(401).json({error: 'true', message: 'Token not exist'})

        jwt.verify(token, process.env.TOKEN_SECRET as string)

        next()
        
    } catch (error) {
        
        return res.status(403).json({error: 'true', message: 'Not authorized or token has expired'})
    }
}