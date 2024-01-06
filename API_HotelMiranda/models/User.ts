
import mongoose from "mongoose"


export interface UserInterface {

    userId: string
    name: string
    email: string
    start_date: Date
    description: string
    contact: string
    active: boolean
}

const UserSchema = new mongoose.Schema({

    userId: String,
    name: String,
    email: String,
    start_date: Date,
    description: String,
    contact: String,
    active: {
        type: Boolean
    }

})

export const User = mongoose.model<UserInterface>('User',UserSchema)