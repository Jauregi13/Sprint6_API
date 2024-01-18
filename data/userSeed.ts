
import { faker } from "@faker-js/faker"; 
import { UserInterface, User } from "../models/User";
import mysql from 'mysql2/promise'

const userTable = `CREATE TABLE IF NOT EXISTS USER (

                    id INT PRIMARY KEY AUTO_INCREMENT,
                    userId varchar(5),
                    name varchar(30),
                    userImage varchar(255),
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

      await connection?.query(`DELETE FROM USER`)

      let insertUser = `INSERT INTO USER (userId,name,userImage,email,start_date,description,contact,active) VALUES `
      let insertValues = []

      for (let index = 0; index < 15; index++) {
        
        const user : UserInterface = randomUser()        

        const userValues = [user.userId,user.name,user.userImage,user.email,user.start_date,
                            user.description,user.contact,user.active]

        insertUser += `(?,?,?,?,?,?,?,?)`

        insertValues.push(...userValues)

        if(index == 14){
            insertUser += ';'
        }
        else {
            insertUser += ', '
        }
      }         

      await connection?.execute(insertUser, insertValues)
      
        
    } catch (error) {
        
        console.error(error);
        
    }
    

    /*await User.deleteMany()

    const users : UserInterface[] = faker.helpers.multiple(randomUser, {
        count: 15
    })

    await User.create(users)*/
}