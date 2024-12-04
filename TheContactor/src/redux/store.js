import { configureStore } from "@reduxjs/toolkit";
import contactAdded  from './features/counter/counter-slice';
import fetchAllContacts from "./features/contactList/contactList-slice";

export default configureStore({
    
    reducer: {
        newContact: contactAdded, 
        allContacts: fetchAllContacts
    },

});