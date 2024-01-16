
import mongoose from "mongoose";
const dotenv = require('dotenv')
dotenv.config({ path: `.env.local`, override: true })

export const connectionMongo = async () => {

    try {
        
        await mongoose.connect(`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD_MONGO}@hotelmiranda.a50ntpt.mongodb.net`)

        console.log('Connected');
        
    } catch (error) {
        console.error('Failed to connect', error)
    }

}

