
import mongoose from "mongoose"
import { Room } from "./Room"

export interface BookingInterface extends mongoose.Document{

    id: string
    guest: string
    order_date: string
    check_in: string
    check_out: string
    special_request: string
    room_type: string
    status: string

}

const BookingSchema = new mongoose.Schema({

    id: String,
    guest: String,
    order_date: Date,
    check_in: Date,
    check_out: Date,
    special_request: String,
    room_type: String,
    status: {
        type: String,
        enum: ['Check In', 'Check Out', 'In Progress']
    }
})

export const Booking = mongoose.model<BookingInterface>('Booking',BookingSchema)

