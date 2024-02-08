

import { faker } from "@faker-js/faker"; 
import { RoomInterface, Room, RoomRowData } from "../models/Room";
import mysql, {FieldPacket } from 'mysql2/promise'

const roomTable = `CREATE TABLE IF NOT EXISTS ROOMS (

                        id INT PRIMARY KEY AUTO_INCREMENT,
                        room_id varchar(5),
                        room_type enum('Single Bed', 'Double Bed', 'Double Superior', 'Suite'),
                        room_number INT(3),
                        description varchar(255),
                        amenities JSON,
                        cancellation varchar(255),
                        price decimal(5,2),
                        offer int(2),
                        available boolean
                    )`


const randomRoom = () : RoomInterface => {

    return {
        room_id: faker.string.numeric(5),
        room_type: faker.helpers.arrayElement(['Single Bed', 'Double Bed', 'Double Superior', 'Suite']),
        room_number: faker.number.int({min: 100, max: 599}).toString(),
        description: faker.lorem.paragraph(),
        amenities: faker.helpers.arrayElements(
            [{
                value: 'AC',
                image_name: 'air-conditioner-icon'
            },
            {
                value: 'Breakfast',
                image_name: 'breakfast-icon'
            },
            {
                value: 'Cleaning',
                image_name: 'cleaning-icon'
            },
            {
                value: 'Grocery',
                image_name: 'grocery-icon'
            },
            {
                value: 'Shop near',
                image_name: 'shop-icon'
            },
            {
                value: '24/7 Online Support',
                image_name: 'online-support-icon'
            },
            {
                value: 'Smart Security',
                image_name: 'security-icon'
            },
            {
                value: 'High Speed WiFi',
                image_name: 'wifi-icon'
            },
            {
                value: 'Kitchen',
                image_name: 'kitchen-icon'
            },
            {
                value: 'Single Bed',
                image_name: 'bed-icon'
            },
            {
                value: 'Towels',
                image_name: 'towels-icon'
            },
            {
                value: 'Strong Locker',
                image_name: 'strong-locker-icon'
            },
            {
                value: 'Expert Team',
                image_name: 'expert-team-icon'
            }]),
        cancellation: faker.lorem.paragraph(),
        price: parseFloat(faker.commerce.price({
            min: 50,
            max: 999
        })),
        offer: faker.number.int({min: 0, max: 99}),
        available: faker.datatype.boolean()
    }
}

export const seedRoom = async (connection : mysql.Connection | undefined) => {

    try {

        await connection?.query(roomTable)

        await connection?.query('DELETE FROM ROOMS')

        for (let index = 0; index < 15; index++) {

            const insertRoom = `INSERT INTO ROOMS (room_id,room_type,room_number,description,amenities,cancellation,price,offer,available) 
                            VALUES (?,?,?,?,?,?,?,?,?);`

            const room : RoomInterface = randomRoom()

            const roomValues = [room.room_id,room.room_type,room.room_number,room.description,room.amenities,
                                room.cancellation,room.price,room.offer,room.available]
            
            await connection?.execute(insertRoom,roomValues)
   
        }

    } catch (error) {
        
        console.error(error);
        
    }

    /*await Room.deleteMany()

    const rooms : RoomInterface[] = faker.helpers.multiple(randomRoom, {
        count: 15
    }) 

    await Room.create(rooms)*/
}