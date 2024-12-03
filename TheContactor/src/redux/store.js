import { configureStore } from "@reduxjs/toolkit";
import stringReducer  from './features/counter/counter-slice';
import contactReducer from './features/ContactList'

export default configureStore({
    
    reducer: {
        status: stringReducer, 
        contact: contactReducer,
    },

});