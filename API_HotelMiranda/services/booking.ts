import { Booking, BookingInterface } from "../models/Booking"
import { Room } from "../models/Room"
import { getRoomById } from "./room"

export const getBookings = async ()=> {

    return await Booking.find().exec()
}

export const getBookingById = async (id: string) => {

    return await Booking.findOne({id: id}).populate('room_type').exec()
}

export const addBooking = async (booking: BookingInterface) => {

    const roomExist = await Room.findById(booking.room_type)
    
    if(roomExist != null){
        console.log('funciona');
        
        await Booking.create(booking)
    }
    else {
        console.log('prueba');
        
        throw new Error('Ese numero de habitación no existe')
    }
    

}

export const deleteBooking = async (id: string) => {

    return await Booking.findOneAndDelete({id: id})
}

export const updateBooking = async (booking: BookingInterface) => {

    return await Booking.findOneAndUpdate({id: booking.bookingId}, booking)
}