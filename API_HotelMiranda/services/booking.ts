import { BookingInterface } from "../models/Booking"
import { bookings } from "../data/bookings"

export const getBookings = () : BookingInterface[] => {

    return bookings
}

export const getBookingById = (id: string) : BookingInterface | undefined=> {

    return bookings.find((booking) => booking.id === id)
}

export const getBookingsCheckIn = () : BookingInterface[] => {

    return bookings.filter((booking) => booking.status === 'Check In')
}

export const getBookingsCheckOut = () : BookingInterface[] => {

    return bookings.filter((booking) => booking.status === 'Check Out')
}

export const getBookingsInProgress = () : BookingInterface[] => {

    return bookings.filter((booking) => booking.status === 'In Progress')
}