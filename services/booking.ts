import { Booking, BookingInterface } from "../models/Booking"
import { Room } from "../models/Room"
import { getRoomById } from "./room"

export const getBookings = async ()=> {

    
    //return await Booking.find().populate('room').exec()
    
}

export const getBookingById = async (id: string) => {

    return await Booking.findOne({bookingId: id}).populate('room').exec()
}

export const addBooking = async (booking: BookingInterface) => {

    const roomExist = await Room.findById(booking.roomId)
    
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