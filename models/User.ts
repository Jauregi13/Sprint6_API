
import mongoose from "mongoose"
import { RowDataPacket } from "mysql2"


export interface UserInterface {

    userId: string
    name: string
    userImage: string
    email: string
    start_date: Date
    description: string
    contact: string
    active: boolean
}

export interface UserRowData extends RowDataPacket {

        id: number
        userId: string
        name: string
        userImage: string
        email: string
        start_date: Date
        description: string
        contact: string
        active: boolean
}

const UserSchema = new mongoose.Schema({

    userId: String,
    name: String,
    userImage: String,
    email: String,
    start_date: Date,
    description: String,
    contact: String,
    active: {
        type: Boolean
    }

})

export const User = mongoose.model<UserInterface>('User',UserSchema)