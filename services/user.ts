import { User, UserInterface, UserRowData } from "../models/User";
import { connectionDB } from "../app";
import { RoomRowData } from "../models/Room";
import { FieldPacket } from "mysql2";

export const getUsers = async () => {

    const connection  = await connectionDB()
    const query : [UserRowData[], FieldPacket[]] | undefined= await connection?.query<UserRowData[]>('SELECT * FROM `USER`')
    if(query){
        return query[0]
    }
    //return await User.find().exec()
}

export const getUserById = async (id: string) => {

    return await User.findOne({id: id}).exec()
}

/*export const getActiveUsers = () : UserInterface[] => {

    return users.filter((user) => user.status === 'ACTIVE')
}

export const getInactiveUsers = () : UserInterface[] => {

    return users.filter((user) => user.status === 'INACTIVE')
}*/

export const addUser = async (user: UserInterface) => {


        const newUser = new User(user)

        await newUser.save()

}

export const deleteUser = async (id: string) => {


    return await User.findOneAndDelete({id: id})


}

export const updateUser = async (user: UserInterface) => {
    
    return await User.findOneAndUpdate({id:user.userId},user)


}
