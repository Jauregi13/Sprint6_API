
import mongoose from "mongoose"
import { Room, RoomInterface } from "./Room"
import { RowDataPacket } from "mysql2"

export interface BookingInterface {

    bookingId: string
    guest: string
    guestImage: string
    email: string
    phone: string
    order_date: Date
    check_in: Date
    check_out: Date
    special_request: string
    // Para MongoDB
    //room: mongoose.Types.ObjectId
    roomId: number
    status: string

}

export interface BookingRowData extends RowDataPacket {

    id: number
    bookingId: string
    guest: string
    guestImage: string
    order_date: Date
    check_in: Date
    check_out: Date
    special_request: string
    roomId: number
    status: string

}

const BookingSchema = new mongoose.Schema({

    bookingId: String,
    guest: String,
    guestImage: String,
    order_date: Date,
    check_in: Date,
    check_out: Date,
    special_request: String,
    room: {
        type: mongoose.Types.ObjectId,
        ref: 'Room'
    },
    status: {
        type: String,
        enum: ['Check In', 'Check Out', 'In Progress']
    }
})

export const Booking = mongoose.model<BookingInterface>('Booking',BookingSchema)

