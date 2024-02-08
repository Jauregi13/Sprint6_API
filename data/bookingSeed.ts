import { Booking, BookingInterface } from "../models/Booking";
import { faker } from "@faker-js/faker"; 
import { Room, RoomRowData } from "../models/Room";

import mysql, { FieldPacket }from 'mysql2/promise'


const bookingTable = `CREATE TABLE IF NOT EXISTS hotelmiranda_booking (

                        id INT PRIMARY KEY AUTO_INCREMENT,
                        booking_id INT(5) UNIQUE,
                        guest varchar(30),
                        guest_image varchar(255),
                        order_date DATETIME,
                        check_in DATETIME,
                        check_out DATETIME,
                        special_request VARCHAR(255),
                        room_id INT,
                        status ENUM('Check In','Check Out','In Progress'),
                        CONSTRAINT fk_booking_room FOREIGN KEY (room_id) REFERENCES rooms(id)
                        ON DELETE CASCADE ON UPDATE CASCADE)`


const randomBooking = async (connection : mysql.Connection | undefined) : Promise<BookingInterface> => {
 
    const order_date = faker.date.between({ from: faker.date.past(), to: Date.now()})
    const check_in = faker.date.past({refDate: order_date})
    const check_out = faker.date.soon({ refDate: check_in, days: 4})

    //Conseguir todos los ids de los rooms
    const queryRooms : [RoomRowData[], FieldPacket[]] | undefined = await connection?.query<RoomRowData[]>('SELECT id FROM `hotelmiranda_room`')
    const roomIds : number[] = []

    if(queryRooms){

        queryRooms[0].forEach((room) => {

            roomIds.push(room.id)
            
        })
    }
        
    const randomRoom = faker.helpers.arrayElement(roomIds)
    

    // Para MongoDB
    //const randomRoom = faker.helpers.arrayElement(await Room.find({},'_id'))   
    
    return {

        bookingId: faker.string.numeric(5),
        guest: faker.person.fullName().replace('\'',' '),
        guestImage: faker.image.avatar(),
        order_date: order_date,
        check_in: check_in,
        check_out: check_out,
        special_request: faker.lorem.sentence(),
        roomId: randomRoom,
        //room: randomRoom._id,
        status: faker.helpers.arrayElement(['Check In', 'Check Out', 'In Progress'])
    }

}

export const seedBooking = async (connection : mysql.Connection | undefined) => {

    try {

        await connection?.query(bookingTable)

        await connection?.query('DELETE FROM hotelmiranda_booking')

        for (let index = 0; index < 10; index++) {

            const queryBooking = `INSERT INTO hotelmiranda_booking (booking_id,guest,guest_image,order_date,check_in,check_out,special_request,
                room_id,status) VALUES (?,?,?,?,?,?,?,?,?);`
            
            const booking : BookingInterface = await randomBooking(connection)

            const bookingValues = [booking.bookingId,booking.guest,booking.guestImage,booking.order_date,booking.check_in,
                                    booking.check_out,booking.special_request,booking.roomId,booking.status]

            await connection?.execute(queryBooking,bookingValues)

        }

        /*await Booking.deleteMany()

        const bookings : BookingInterface[] = []

        for (let i = 0; i < 10; i++) {
           
            bookings.push(await randomBooking(connection))
        }        
    
        await Booking.create(bookings)*/
        
    } catch (error) {
        console.log(error);
           
    }

    
}