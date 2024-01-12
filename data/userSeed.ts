
import { faker } from "@faker-js/faker"; 
import { UserInterface, User } from "../models/User";
import { format } from "path";


const randomUser = () : UserInterface => {

    return {

        userId: faker.string.numeric(5),
        name: faker.person.fullName(),
        userImage: faker.image.avatar(),
        email: faker.internet.email(),
        start_date: faker.date.past(),
        description: faker.lorem.paragraph(),
        contact: faker.helpers.fromRegExp('[6-9][0-9]{2} [0-9]{3} [0-9]{3}'),
        active: faker.datatype.boolean()

    }


}

export const seedUser = async () => {

    await User.deleteMany()

    const users : UserInterface[] = faker.helpers.multiple(randomUser, {
        count: 15
    })

    await User.create(users)
}