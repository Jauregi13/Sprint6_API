import { ResultSetHeader } from 'mysql2'
import { connectionDB } from '../app'
import { Room, RoomInterface, RoomRowData } from '../models/Room'

export const getRooms = async () => {

    const connection = await connectionDB()
    const query = await connection?.query<RoomRowData[]>('SELECT * FROM ROOMS')

    if(query) return query[0]
    //return  await Room.find().exec()
}

export const getRoomById = async (id: string) => {
    
    const connection = await connectionDB()
    const query = 'SELECT * FROM ROOMS WHERE id = ?'
    const parameter = [id]
    const result = await connection?.query(query,parameter)

    if(result) return result[0]
    //return await Room.findById(id).exec()
}

export const getRoomsAvailable = async () => {

    //return rooms.filter((room) => room.status === 'Available')
}

export const getRoomsBooked = async () => {

    //return rooms.filter((room) => room.status === 'Booked')
}

export const addRoom = async (room: RoomInterface) => {


    const connection = await connectionDB()
    const query = `INSERT INTO ROOMS (room_id,room_type,room_number,description,amenities,cancellation,price,offer,available)
                    VALUES (?,?,?,?,?,?,?,?,?);`
    
    const roomValues = [room.room_id,room.room_type,room.room_number,room.description,JSON.stringify(room.amenities),room.cancellation,
                        room.price,room.offer,room.available]

    await connection?.query<ResultSetHeader>(query,roomValues)

    /*const newRoom = new Room(room)

    await newRoom.save()

    console.log('Habitacion guardada');*/
    

}

export const deleteRoom = async (id: string) => {

    try {

        //return await Room.findOneAndDelete({id: id})
        
    } catch (error) {
        
        console.error('Error al borrar la habitación');
        
    } 
}

export const updateRoom = async (room: RoomInterface) => {

    try {
                
        //return await Room.findOneAndUpdate({id: room.roomId}, {room_type : room.room_type})
        
    } catch (error) {
        
        console.error('Error al borrar la habitación');
        
    } 
}