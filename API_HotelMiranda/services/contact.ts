
import { Contact, ContactInterface } from "../models/Contact";

export const getContacts = async () => {


    return await Contact.find().exec()
}

export const getContactById = async (id : string) => {

    return await Contact.findOne({id: id}).exec()
}

export const addReview = async (review: ContactInterface) => {

    await Contact.create(review)

}

export const updateReview = async (review : ContactInterface) => {

    return await Contact.findOneAndUpdate({id: review.reviewId},{status: review.published})

}

