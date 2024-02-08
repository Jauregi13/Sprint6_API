

import { faker } from "@faker-js/faker";
import { Contact, ContactInterface } from "../models/Contact";
import mysql from 'mysql2/promise'


const contactTable = `CREATE TABLE IF NOT EXISTS hotelmiranda_contact (

                        id INT PRIMARY KEY AUTO_INCREMENT,
                        review_id INT(5) UNIQUE,
                        date DATE,
                        customer VARCHAR(30),
                        customer_image VARCHAR(255),
                        email VARCHAR(255),
                        phone VARCHAR(11),
                        subject VARCHAR(255),
                        comment VARCHAR(1024),
                        published BOOLEAN
                    )`



const randomReview = () : ContactInterface => {

    return {

        review_id: faker.string.numeric(5),
        date: faker.date.past(),
        customer: faker.person.fullName(),
        customer_image: faker.image.avatar(),
        email: faker.internet.email(),
        phone: faker.helpers.fromRegExp('[6-9][0-9]{2} [0-9]{3} [0-9]{3}'),
        subject: faker.lorem.sentence(),
        comment: faker.lorem.paragraph(5),
        published: faker.datatype.boolean()
    }

}


export const seedContact = async (connection : mysql.Connection | undefined) => {


    try {

        await connection?.query(contactTable)

        await connection?.query(`DELETE FROM hotelmiranda_contact`)

        for (let index = 0; index < 15; index++) {

            const queryContact = `INSERT INTO hotelmiranda_contact (review_id,date,customer,customer_image,email,phone,subject,comment,published) 
                                VALUES (?,?,?,?,?,?,?,?,?);`
            
            const contact : ContactInterface = randomReview()        

            const contactValues = [contact.review_id,contact.date,contact.customer,contact.customer_image,contact.email,
                                contact.phone,contact.subject,contact.comment,contact.published]

            await connection?.execute(queryContact, contactValues)

        }         

        


        /*await Contact.deleteMany()

        const reviews : ContactInterface[] = faker.helpers.multiple(randomReview, {
            count: 10
        })

        await Contact.create(reviews)*/
        
    } catch (error) {
        
        console.log(error);
        
    }
    



}