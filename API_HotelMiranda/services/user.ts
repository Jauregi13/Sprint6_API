import { User, UserInterface } from "../models/User";
import { users } from "../data/users";


export const getUsers = async () => {

    return await User.find().exec()
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
    
    return await User.findOneAndUpdate({id:user.id},user)


}
