

import { faker } from "@faker-js/faker"; 
import { RoomInterface, Room } from "../models/Room";


const randomRoom = () : RoomInterface => {

    return {
        roomId: faker.string.numeric(5),
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