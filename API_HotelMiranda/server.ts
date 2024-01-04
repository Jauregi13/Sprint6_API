const mongoose = require('mongoose')
const port = 3000
import { app } from './app'


app.listen(port, async () => {

  try {

    const connectionMongo = mongoose.connect('mongodb://127.0.0.1:27017/HotelMiranda_API')

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