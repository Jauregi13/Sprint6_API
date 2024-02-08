
import mysql from 'mysql2/promise'
const dotenv = require('dotenv')
dotenv.config({ path: `.env.local`, override: true })

export const connectionMySQL = async () => {


    try {
        
        const connection =  await mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: process.env.PASSWORD_MYSQL,
            database: 'hotelmiranda'
        })
        
        console.log('connected to DB');
        
        return connection

        
    } catch (error) {
        console.log(error);
    }
}