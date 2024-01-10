

import { faker } from "@faker-js/faker";
import { Contact, ContactInterface } from "../models/Contact";



const randomReview = () : ContactInterface => {

    return {

        reviewId: faker.string.numeric(5),
        date: faker.date.past(),
        customer: faker.person.fullName(),
        comment: faker.lorem.paragraph(5),
        published: faker.datatype.boolean()
    }

}


export const seedContact = async () => {

    const reviews : ContactInterface[] = faker.helpers.multiple(randomReview, {
        count: 10
    })

    await Contact.create(reviews)



}