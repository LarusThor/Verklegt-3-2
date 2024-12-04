import { createSlice } from '@reduxjs/toolkit';

const contactListSlice = createSlice({
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
        },
        fetchAllContacts(state, action) {
            return (action.payload)
        }
    }
});

export const { contactAdded, fetchAllContacts } = contactListSlice.actions;
export default contactListSlice.reducer;