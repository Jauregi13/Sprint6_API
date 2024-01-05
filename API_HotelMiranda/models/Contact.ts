
import mongoose from "mongoose"

export interface ContactInterface extends mongoose.Document{

    id: string
    date: string
    customer: string
    comment: string
    status: string

}

const ContactSchema = new mongoose.Schema({

    id: String,
    date: Date,
    customer: String,
    comment: String,
    status: {
        type: String,
        enum: ['published','archived']
    }
})

export const Contact = mongoose.model<ContactInterface>('Contact',ContactSchema)