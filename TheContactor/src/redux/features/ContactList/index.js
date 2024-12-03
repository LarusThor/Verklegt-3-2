import { createSlice } from '@reduxjs/toolkit';

const contactListSlice = createSlice({

    name: 'Contact',
    initialState:{
        name: '',
        phoneNumber: '',
        photo: ''
    },
    reducers: {
       changeContact: (state, action) => {
        const { name, phoneNumber, photo} = action.payload;
        state.name = name,
        state.phoneNumber = phoneNumber
        state.photo = photo 
       }
    }

});

export const { changeContact  } = contactListSlice.actions;
export  default contactListSlice.reducer;