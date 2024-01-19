
import { faker } from "@faker-js/faker"; 
import { UserInterface, User } from "../models/User";
import mysql from 'mysql2/promise'

const userTable = `CREATE TABLE IF NOT EXISTS USERS (

                    id INT PRIMARY KEY AUTO_INCREMENT,
                    user_id varchar(5),
                    name varchar(30),
                    user_image varchar(255),
                    email varchar(255),
                    start_date DATE,
                    description varchar(255),
                    contact varchar(11),
                    active boolean

                )`

const randomUser = () : UserInterface => {

    return {

        userId: faker.string.numeric(5),
        name: faker.person.fullName().replace('\'',' '),
        userImage: faker.image.avatar(),
        email: faker.internet.email(),
        start_date: faker.date.past(),
        description: faker.person.jobDescriptor(),
        contact: faker.helpers.fromRegExp('[6-9][0-9]{2} [0-9]{3} [0-9]{3}'),
        active: faker.datatype.boolean()

    }


}

export const seedUser = async (connection : mysql.Connection | undefined) => {

    try {
    
      await connection?.query(userTable)

      await connection?.query(`DELETE FROM USERS`)


      for (let index = 0; index < 15; index++) {

        const insertUser = `INSERT INTO USERS (user_id,name,user_image,email,start_date,description,contact,active) 
                            VALUES (?,?,?,?,?,?,?,?);`
        
        const user : UserInterface = randomUser()        

        const userValues = [user.userId,user.name,user.userImage,user.email,user.start_date,
                            user.description,user.contact,user.active]

        await connection?.execute(insertUser, userValues)
      }       

        
    } catch (error) {
        
        console.error(error);
        
    }
    

    /*await User.deleteMany()

    const users : UserInterface[] = faker.helpers.multiple(randomUser, {
        count: 15
    })

    await User.create(users)*/
}