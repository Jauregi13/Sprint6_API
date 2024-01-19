
import mongoose from "mongoose"
import { RowDataPacket } from "mysql2"

export interface ContactInterface {

    review_id: string
    date: Date
    customer: string
    customer_image: string
    email: string
    phone: string
    subject: string
    comment: string
    published: boolean

}

export interface ContactRowData extends RowDataPacket {

    id: number
    review_id: string
    date: Date
    customer: string
    customer_image: string
    email: string
    phone: string
    subject: string
    comment: string
    published: boolean

}

const ContactSchema = new mongoose.Schema({

    reviewId: String,
    date: Date,
    customer: String,
    customerImage: String,
    email: String,
    phone: String,
    subject: String,
    comment: String,
    published: {
        type: Boolean,
    }
})

export const Contact = mongoose.model<ContactInterface>('Contact',ContactSchema)