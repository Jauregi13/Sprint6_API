import { UserInterface } from "../models/User";
import { users } from "../data/users";


export const getUsers = () : UserInterface[] => {

    return users
}

export const getUserById = (id: string) : UserInterface | undefined => {

    return users.find((user) => user.id === id)
}

export const getActiveUsers = () : UserInterface[] => {

    return users.filter((user) => user.status === 'ACTIVE')
}

export const getInactiveUsers = () : UserInterface[] => {

    return users.filter((user) => user.status === 'INACTIVE')
}
