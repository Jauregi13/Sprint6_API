

import mongoose from "mongoose";
import { seedRoom } from "./roomSeed";
import { seedUser } from "./userSeed";
import { seedBooking } from "./bookingSeed";
import { seedContact } from "./contactSeed";


mongoose.connect(`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD_MONGO}@hotelmiranda.a50ntpt.mongodb.net`).then(async () => {

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

