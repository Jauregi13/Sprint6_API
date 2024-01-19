import { User, UserInterface, UserRowData } from "../models/User";
import { connectionDB } from "../app";
import { RoomRowData } from "../models/Room";
import { Field, FieldPacket, ResultSetHeader } from "mysql2";

export const getUsers = async () => {

    const connection  = await connectionDB()
    const query : [UserRowData[], FieldPacket[]] | undefined= await connection?.query<UserRowData[]>('SELECT * FROM `USERS`')
    if(query) return query[0]
    //return await User.find().exec()
}

export const getUserById = async (id: string) => {

    const connection = await connectionDB()
    const query = 'SELECT * FROM `USERS` WHERE id = ?'
    const parameter = [id]
    const executeQuery : [UserRowData[], FieldPacket[]] | undefined = await connection?.query<UserRowData[]>(query,parameter)

    if(executeQuery) return executeQuery[0]
    //return await User.findOne({id: id}).exec()
}

/*export const getActiveUsers = () : UserInterface[] => {

    return users.filter((user) => user.status === 'ACTIVE')
}

export const getInactiveUsers = () : UserInterface[] => {

    return users.filter((user) => user.status === 'INACTIVE')
}*/

export const addUser = async (user: UserInterface) => {

    const connection = await connectionDB()
    const query = `INSERT INTO USERS (user_id,name,user_image,email,start_date,description,contact,active) 
                    VALUES (?,?,?,?,?,?,?,?);`
    
    const userValues = [user.user_id,user.name,user.user_image,user.email,new Date(user.start_date),
                        user.description,user.contact,user.active]

    await connection?.query<ResultSetHeader>(query,userValues)

    //const newUser = new User(user)

    //await newUser.save()

}

export const deleteUser = async (id: string) => {

    const connection = await connectionDB()
    const query = `DELETE FROM USERS WHERE id = ?`
    const parameter = [id]
    
    const result : [ResultSetHeader,FieldPacket[]] | undefined = await connection?.query<ResultSetHeader>(query,parameter)
    console.log(result);
    
    if(result) return result[0]
    //return await User.findOneAndDelete({id: id})


}

export const updateUser = async (user: UserInterface) => {


    const connection = await connectionDB()

    const query = `UPDATE USERS SET name = ?, user_image = ?, email = ?, start_date = ?, description = ?,
                    contact = ?, active = ? WHERE user_id = ?`
    
    const userValues = [user.name,user.user_image,user.email,new Date(user.start_date),user.description,user.contact,
                        user.active, user.user_id]
    
    const result = await connection?.query<ResultSetHeader>(query,userValues)

    if(result) return result[0]
    //return await User.findOneAndUpdate({id:user.userId},user)


}
