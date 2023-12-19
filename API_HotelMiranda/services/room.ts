import { RoomInterface } from '../models/Room'
import { rooms } from './../data/rooms'


export const getRooms = () : RoomInterface[] => {

    return rooms
}

export const getRoomById = (id: string) : RoomInterface | undefined => {
    
    return rooms.find((room) => room.id.slice(1,room.id.length) === id)
}

export const getRoomsAvailable = () : RoomInterface[] => {

    return rooms.filter((room) => room.status === 'Available')
}

export const getRoomsBooked = () : RoomInterface[] => {

    return rooms.filter((room) => room.status === 'Booked')
}