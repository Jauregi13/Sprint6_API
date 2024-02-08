

import mongoose from "mongoose";
import { seedRoom } from "./roomSeed";
import { seedUser } from "./userSeed";
import { seedBooking } from "./bookingSeed";
import { seedContact } from "./contactSeed";
import { connectionMySQL } from "../connectionMySQL";
const seed = async () => {


    const connection = await connectionMySQL()
    await seedRoom(connection)
    //await seedUser(connection)
    await seedBooking(connection)
    await seedContact(connection)
    //await mongoose.disconnect()
    await connection?.end()

}

seed()

