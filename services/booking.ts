import { ResultSetHeader } from "mysql2"
import { connectionDB } from "../app"
import { Booking, BookingInterface, BookingRowData } from "../models/Booking"
import { Room } from "../models/Room"
import { getRoomById } from "./room"

export const getBookings = async ()=> {

    const connection = await connectionDB()
    const query = `SELECT * FROM BOOKINGS INNER JOIN ROOMS ON ROOMS.id = BOOKINGS.room_id`
    const result = await connection?.query(query)

    if(result) return result[0]
    //return await Booking.find().populate('room').exec()
    
}

export const getBookingById = async (id: string) => {

    const connection = await connectionDB()
    const query = `SELECT * FROM BOOKINGS INNER JOIN ROOMS ON ROOMS.id = BOOKINGS.room_id WHERE booking_id = ?`
    const parameter = [id]
    const result = await connection?.query<BookingRowData[]>(query,parameter)
    if(result) return result[0]

    //return await Booking.findOne({bookingId: id}).populate('room').exec()
}

export const addBooking = async (booking: BookingInterface) => {

    try {

        const connection = await connectionDB()
        const query = `INSERT INTO BOOKINGS (booking_id,guest,guest_image,order_date,check_in,check_out,
                        special_request,room_id,status) VALUES (?,?,?,?,?,?,?,?,?);`
        const bookingValues = [booking.bookingId,booking.guest,booking.guestImage,new Date(booking.order_date),
                            new Date(booking.check_in),new Date(booking.check_out),booking.special_request,
                            booking.roomId,booking.status]

        await connection?.query<ResultSetHeader>(query,bookingValues)
        /*const roomExist = await Room.findById(booking.roomId)
    
        if(roomExist != null){
            console.log('funciona');
            
            await Booking.create(booking)
        }
        else {
            console.log('prueba');
            
            throw new Error('Ese numero de habitación no existe')
        }*/
        
    } catch (error) {
        console.log(error);
        
    }
    
    

}

export const deleteBooking = async (id: string) => {

    const connection = await connectionDB()
    const query = `DELETE FROM BOOKINGS WHERE id = ?;`
    const parameter = [id]

    const result = await connection?.query<ResultSetHeader>(query,parameter)

    if(result) return result[0]
    //return await Booking.findOneAndDelete({id: id})
}

export const updateBooking = async (booking: BookingInterface) => {

    const connection = await connectionDB()
    const query = `UPDATE BOOKINGS SET guest = ?, guest_image = ?, order_date = ?, check_in = ?, check_out = ?,
                    special_request = ?, room_id = ?, status = ? WHERE booking_id = ?`
    const bookingValues = [booking.guest, booking.guestImage,new Date(booking.order_date), new Date(booking.check_in),
                            new Date(booking.check_out),booking.special_request,booking.roomId,booking.status,booking.bookingId]
    const result = await connection?.query<ResultSetHeader>(query,bookingValues)

    if(result) return result[0]
    //return await Booking.findOneAndUpdate({id: booking.bookingId}, booking)
}