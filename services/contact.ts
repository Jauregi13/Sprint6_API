
import { FieldPacket, ResultSetHeader } from "mysql2";
import { connectionDB } from "../app";
import { Contact, ContactInterface, ContactRowData } from "../models/Contact";

export const getContacts = async () => {

    const connection = await connectionDB()
    const query : [ContactRowData[], FieldPacket[]] | undefined = await connection?.query<ContactRowData[]>('SELECT * FROM CONTACT')
    await connection?.end()
    if(query){
        return query[0]
    }
    //return await Contact.find().exec()
}

export const getContactById = async (id : string) => {

    const connection = await connectionDB()
    const query = 'SELECT * FROM CONTACT WHERE reviewId = ?'
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
        const query = `INSERT INTO CONTACT (reviewId,date,customer,customerImage,email,phone,subject,comment,published) VALUES
                        (?,?,?,?,?,?,?,?,?);`
        
        const reviewValues = [review.reviewId,new Date(review.date),review.customer,review.customerImage,review.email,
                            review.phone,review.subject,review.comment,review.published]
        
        await connection?.execute<ResultSetHeader>(query,reviewValues)

        //await Contact.create(review)
    
}

export const updateReview = async (review : ContactInterface) => {

    const connection = await connectionDB()
    const query = `UPDATE CONTACT SET date = ?, customer = ?, customerImage = ?, email = ?,
                    phone = ?, subject = ?, comment = ?, published = ? WHERE reviewId = ?`

    const reviewValues = [new Date(review.date),review.customer,review.customerImage,review.email,
                            review.phone,review.subject,review.comment, review.published, review.reviewId]
    
    await connection?.execute<ResultSetHeader>(query,reviewValues)

    //return await Contact.findOneAndUpdate({id: review.reviewId},{status: review.published})

}

