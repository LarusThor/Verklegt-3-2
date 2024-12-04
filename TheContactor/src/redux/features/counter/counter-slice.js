import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'Contacts',
    initialState: [],
    reducers: {
        contactAdded(state, action) {
            state.push({
                id: action.payload.id,
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber,
                photo: action.payload.photo
            })
        }
    }
});

export const { contactAdded } = counterSlice.actions;
export default counterSlice.reducer;