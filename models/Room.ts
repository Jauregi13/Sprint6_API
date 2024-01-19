
import mongoose from "mongoose"
import { RowDataPacket } from "mysql2"

export interface RoomInterface{

    roomId: string
    room_type: string
    room_number: string
    description: string
    amenities: string[]
    cancellation: string
    price: number
    offer: number
    available: boolean

}

export interface RoomRowData extends RowDataPacket{

    id: number
    roomId: string
    room_type: string
    room_number: string
    description: string
    amenities: string[]
    cancellation: string
    price: number
    offer: number
    available: boolean

}

const RoomSchema = new mongoose.Schema({

    roomId: String,
    room_type: String,
    room_number: String,
    description: String,
    amenities: [String],
    cancellation: String,
    price: Number,
    offer: Number,
    available: Boolean

})

export const Room =  mongoose.model<RoomInterface>('Room', RoomSchema)