import * as constants from  '../constants'

export const addContact = (name, photo, phonenumber) => ({
    type: constants.ADD_CONTACT,
    payload: {name, photo, phonenumber}
});