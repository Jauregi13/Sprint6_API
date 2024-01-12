import { Booking, BookingInterface } from "../models/Booking";
import { faker } from "@faker-js/faker"; 
import { Room } from "../models/Room";



const randomBooking = async () : Promise<BookingInterface> => {
 
    const order_date = faker.date.between({ from: faker.date.past(), to: Date.now()})
    const check_in = faker.date.past({refDate: order_date})
    const check_out = faker.date.soon({ refDate: check_in, days: 4})
    const randomRoom = faker.helpers.arrayElement(await Room.find({},'_id'))     

    return {

        bookingId: faker.string.numeric(5),
        guest: faker.person.fullName(),
        guestImage: faker.image.avatar(),
        order_date: order_date,
        check_in: check_in,
        check_out: check_out,
        special_request: faker.lorem.sentence(),
        room: randomRoom._id,
        status: faker.helpers.arrayElement(['Check In', 'Check Out', 'In Progress'])
    }

}

export const seedBooking = async () => {

    try {

        await Booking.deleteMany()

        const bookings : BookingInterface[] = []

        for (let i = 0; i < 10; i++) {
           
            bookings.push(await randomBooking())
        }        
    
        await Booking.create(bookings)
        
    } catch (error) {
        console.log(error);
           
    }

    
}