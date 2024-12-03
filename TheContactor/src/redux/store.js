import { configureStore } from "@reduxjs/toolkit";
import stringReducer  from './features/counter/counter-slice';

export default configureStore({
    
    reducer: {
        counter: stringReducer, 

    },

});