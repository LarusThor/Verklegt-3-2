import { configureStore } from "@reduxjs/toolkit";
import contactAdded  from './features/counter/counter-slice';

export default configureStore({
    
    reducer: {
        newContact: contactAdded, 
    },

});