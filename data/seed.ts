

import mongoose from "mongoose";
import { seedRoom } from "./roomSeed";
import { seedUser } from "./userSeed";
import { seedBooking } from "./bookingSeed";
import { seedContact } from "./contactSeed";
import { connectionMongo } from "../connectionMongo";

const seed = async () => {


    await connectionMongo()
    await seedRoom()
    await seedUser()
    await seedBooking()
    await seedContact()
    await mongoose.disconnect()

}

seed()

