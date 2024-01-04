
import mongoose from "mongoose"

export interface RoomInterface extends mongoose.Document {

    id: string
    room_type: string
    room_number: string
    description: string
    amenities: string[]
    cancellation: string
    price: number
    offer: number
    status: string

}

const RoomSchema = new mongoose.Schema({

    id: String,
    room_type: String,
    room_number: String,
    description: String,
    amenities: [String],
    cancellation: String,
    price: Number,
    offer: Number,
    status: String,

})

export const Room =  mongoose.model<RoomInterface>('Room', RoomSchema)