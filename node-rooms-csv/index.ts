import { log } from "console"

const fs = require('fs')

const rooms : string = fs.readFileSync('./rooms.json',{
    encoding: 'utf8', flag: 'r'
})

interface RoomInterface {

    id: string
    room_type: string
    room_number: string
    description: string
    amenities: Array<string>
    cancellation: string
    price: number
    offer: number
    status: string
}

const roomsJson : RoomInterface[] = JSON.parse(rooms);

console.log(roomsJson);


const roomsOrderByPrice = roomsJson.sort((a : RoomInterface,b: RoomInterface) : number => {

    if(a.price > b.price){
        return 1
    }
    else if (a.price < b.price) {
        return -1
    }
    return 0
    
})


console.log('Rooms ordered by price: ' ,roomsOrderByPrice);

fs.writeFileSync('rooms.csv','id, number, type, description, amenities, cancellation, price, offer, status\n')

roomsOrderByPrice.forEach((room) => {    

    fs.writeFileSync('rooms.csv', room.id+','+room.room_type+','+room.room_number+','
    +room.description+','+room.amenities.toString()+','+room.cancellation+','+room.price+','+room.offer+','+room.status+'\n',{
        flag: 'a+'
    })
})


