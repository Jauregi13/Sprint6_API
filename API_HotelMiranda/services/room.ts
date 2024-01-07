import mongoose from 'mongoose'
import { Room, RoomInterface } from '../models/Room'

export const getRooms = async () => {

    return  await Room.find().exec()
}

export const getRoomById = async (id: string) => {
    
    return await Room.findById(id).exec()
}

export const getRoomsAvailable = async () => {

    //return rooms.filter((room) => room.status === 'Available')
}

export const getRoomsBooked = async () => {

    //return rooms.filter((room) => room.status === 'Booked')
}

export const addRoom = async (room: RoomInterface) => {

    try {

        const newRoom = new Room(room)

        await newRoom.save()

        console.log('Habitacion guardada');
        
        
    } catch (error) {
        console.error('Error al guardar')
    }
    

}

export const deleteRoom = async (id: string) => {

    try {

        return await Room.findOneAndDelete({id: id})
        
    } catch (error) {
        
        console.error('Error al borrar la habitación');
        
    } 
}

export const updateRoom = async (room: RoomInterface) => {

    try {
                
        return await Room.findOneAndUpdate({id: room.roomId}, {room_type : room.room_type})
        
    } catch (error) {
        
        console.error('Error al borrar la habitación');
        
    } 
}