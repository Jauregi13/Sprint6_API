
import mongoose from "mongoose"


export interface UserInterface extends mongoose.Document{

    id: string
    name: string
    email: string
    start_date: string
    description: string
    contact: string
    status: string
}

const UserSchema = new mongoose.Schema({

    id: String,
    name: String,
    email: String,
    start_date: Date,
    description: String,
    contact: String,
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE']
    }

})

export const User = mongoose.model<UserInterface>('User',UserSchema)