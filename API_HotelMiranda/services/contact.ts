
import { contacts } from "../data/contacts";
import { ContactInterface } from "../models/Contact";

export const getContacts = () : ContactInterface[] => {
    return contacts
}

export const getContactById = (id : string) : ContactInterface | undefined => {

    return contacts.find((contact) => contact.id === id)
}

export const getPublishedContact = () : ContactInterface[] => {

    return contacts.filter((contact) => contact.status === 'published')
}

export const getArchivedContact = () : ContactInterface[] => {

    return contacts.filter((contact) => contact.status === 'archived')
}

