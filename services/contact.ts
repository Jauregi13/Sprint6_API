
import { FieldPacket, ResultSetHeader } from "mysql2";
import { connectionDB } from "../app";
import { Contact, ContactInterface, ContactRowData } from "../models/Contact";

export const getContacts = async () => {

    const connection = await connectionDB()
    const query : [ContactRowData[], FieldPacket[]] | undefined = await connection?.query<ContactRowData[]>('SELECT * FROM CONTACTS')
    await connection?.end()
    if(query){
        return query[0]
    }
    //return await Contact.find().exec()
}

export const getContactById = async (id : string) => {

    const connection = await connectionDB()
    const query = 'SELECT * FROM CONTACTS WHERE review_id = ?'
    const parameter = [id]
    const executeQuery : [ContactRowData[], FieldPacket[]] | undefined = await connection?.execute<ContactRowData[]>(query,parameter)
    await connection?.end()

    if(executeQuery){
        return executeQuery[0]
    }
    
    //return await Contact.findOne({id: id}).exec()
}

export const addReview = async (review: ContactInterface) => {

        const connection = await connectionDB()
        const query = `INSERT INTO CONTACTS (review_id,date,customer,customer_image,email,phone,subject,comment,published) VALUES
                        (?,?,?,?,?,?,?,?,?);`
        
        const reviewValues = [review.review_id,new Date(review.date),review.customer,review.customer_image,review.email,
                            review.phone,review.subject,review.comment,review.published]
        
        await connection?.execute<ResultSetHeader>(query,reviewValues)

        //await Contact.create(review)
    
}

export const updateReview = async (review : ContactInterface) => {

    const connection = await connectionDB()
    
    const query = `UPDATE CONTACTS SET date = ?, customer = ?, customer_image = ?, email = ?,
                    phone = ?, subject = ?, comment = ?, published = ? WHERE review_id = ?`

    const reviewValues = [new Date(review.date),review.customer,review.customer_image,review.email,
                            review.phone,review.subject,review.comment, review.published, review.review_id]
    
    await connection?.execute<ResultSetHeader>(query,reviewValues)

    //return await Contact.findOneAndUpdate({id: review.reviewId},{status: review.published})

}

