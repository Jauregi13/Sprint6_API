
import mongoose from "mongoose"
import { Room, RoomInterface } from "./Room"

export interface BookingInterface {

    bookingId: string
    guest: string
    order_date: Date
    check_in: Date
    check_out: Date
    special_request: string
    room_type: mongoose.Types.ObjectId
    status: string

}

const BookingSchema = new mongoose.Schema({

    bookingId: String,
    guest: String,
    order_date: Date,
    check_in: Date,
    check_out: Date,
    special_request: String,
    room_type: {
        type: mongoose.Types.ObjectId,
        ref: 'Room'
    },
    status: {
        type: String,
        enum: ['Check In', 'Check Out', 'In Progress']
    }
})

export const Booking = mongoose.model<BookingInterface>('Booking',BookingSchema)

