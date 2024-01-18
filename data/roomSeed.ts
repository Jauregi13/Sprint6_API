

import { faker } from "@faker-js/faker"; 
import { RoomInterface, Room, RoomRowData } from "../models/Room";
import mysql, {FieldPacket } from 'mysql2/promise'

const roomTable = `CREATE TABLE IF NOT EXISTS ROOM (

                        id INT PRIMARY KEY AUTO_INCREMENT,
                        roomId varchar(5),
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
        roomId: faker.string.numeric(5),
        room_type: faker.helpers.arrayElement(['Single Bed', 'Double Bed', 'Double Superior', 'Suite']),
        room_number: faker.number.int({min: 100, max: 599}).toString(),
        description: faker.lorem.paragraph(),
        amenities: faker.helpers.arrayElements(
            ['AC',
            'Breakfast',
            'Cleaning',
            'Grocery',
            'Shop near',
            '24/7 Online Support',
            'Smart Security',
            'High Speed WiFi',
            'Kitchen',
            'Single Bed',
            'Towels',
            'Strong Locker',
            'Expert Team']),
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

        await connection?.query('DELETE FROM ROOM')

        let insertRoom = `INSERT INTO ROOM (roomId,room_type,room_number,description,amenities,cancellation,price,offer,available) 
                            VALUES `
        let insertValues = []

        for (let index = 0; index < 15; index++) {

            const room : RoomInterface = randomRoom()

            const roomValues = [room.roomId,room.room_type,room.room_number,room.description,room.amenities,
                                room.cancellation,room.price,room.offer,room.available]

            insertRoom += `(?,?,?,?,?,?,?,?,?)`

            insertValues.push(...roomValues)

            if(index == 14){
                insertRoom += `;`
            }
            else {
                insertRoom += ', '
            }
            
        }

        await connection?.execute(insertRoom,insertValues)
        
    } catch (error) {
        
        console.error(error);
        
    }

    /*await Room.deleteMany()

    const rooms : RoomInterface[] = faker.helpers.multiple(randomRoom, {
        count: 15
    }) 

    await Room.create(rooms)*/
}