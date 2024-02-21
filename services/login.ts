import { NextFunction , Request, Response} from "express"

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({ path: `.env.local`, override: true })

const user = process.env.USER_DASHBOARD
const password = process.env.PASSWORD_DASHBOARD

export interface User {
    user : string
    password : string
}


export const signToken = (username : User) : string | undefined => {
    
    if(username.user === user && username.password === password){
                
        return jwt.sign(username,process.env.SECRET_TOKEN)
    } 
}

export const authenticateToken = (req : Request,res : Response,next : NextFunction) => {

    try {

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) return res.status(401).json({error: 'true', message: 'Token not exist'})

        jwt.verify(token, process.env.SECRET_TOKEN as string)

        next()
        
    } catch (error) {
        
        return res.status(403).json({error: 'true', message: 'Not authorized or token has expired'})
    }
}