
import mongoose from "mongoose"

export interface ContactInterface {

    reviewId: string
    date: Date
    customer: string
    customerImage: string
    comment: string
    published: boolean

}

const ContactSchema = new mongoose.Schema({

    reviewId: String,
    date: Date,
    customer: String,
    customerImage: String,
    comment: String,
    published: {
        type: Boolean,
    }
})

export const Contact = mongoose.model<ContactInterface>('Contact',ContactSchema)