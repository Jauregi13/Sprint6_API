

import mongoose from "mongoose";
import { seedRoom } from "./roomSeed";
import { seedUser } from "./userSeed";
import { seedBooking } from "./bookingSeed";
import { seedContact } from "./contactSeed";

mongoose.connect('mongodb://127.0.0.1:27017/HotelMiranda_API').then(async () => {

    console.log('Connected')
    await seedRoom()
    await seedUser()
    await seedBooking()
    await seedContact()
    await mongoose.disconnect()
    
})
.catch((error) => {
    console.log(error);
    
})

