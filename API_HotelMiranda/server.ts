const mongoose = require('mongoose')
const port = 3000
import { app } from './app'

app.listen(port, async () => {

  try {

    const connectionMongo = mongoose.connect(`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD_MONGO}@hotelmiranda.a50ntpt.mongodb.net`)

    if(connectionMongo){
      
      console.log('Connected');
      
    }
    else {
      console.error('Failed to connect')
    }

    console.log(`Example app listening on port ${port}`)
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

    
})