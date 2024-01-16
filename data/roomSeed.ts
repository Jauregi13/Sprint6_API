

import { faker } from "@faker-js/faker"; 
import { RoomInterface, Room } from "../models/Room";


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
            min: 50
        })),
        offer: faker.number.int({min: 0, max: 100}),
        available: faker.datatype.boolean()
    }
}

export const seedRoom = async () => {

    await Room.deleteMany()

    const rooms : RoomInterface[] = faker.helpers.multiple(randomRoom, {
        count: 15
    }) 

    await Room.create(rooms)
}