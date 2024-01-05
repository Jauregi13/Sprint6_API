
import { Contact, ContactInterface } from "../models/Contact";

export const getContacts = async () => {


    return Contact.find().exec()
}

export const getContactById = (id : string) => {

    return Contact.findOne({id: id}).exec()
}

export const addReview = async (review: ContactInterface) => {

    await Contact.create(review)

}

export const updateReview = async (review : ContactInterface) => {

    return await Contact.findOneAndUpdate({id: review.id},{status: review.status})

}

