
import { faker } from "@faker-js/faker"; 
import { UserInterface, User } from "../models/User";


const randomUser = () : UserInterface => {

    return {

        userId: faker.string.numeric(5),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        start_date: faker.date.past(),
        description: faker.lorem.paragraph(),
        contact: faker.phone.number(),
        active: faker.datatype.boolean()

    }


}

export const seedUser = async () => {

    const users : UserInterface[] = faker.helpers.multiple(randomUser, {
        count: 15
    })

    await User.create(users)
}