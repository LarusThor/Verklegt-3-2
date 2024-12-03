import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'string',
    initialState: {
        value: '',
    }, 
    reducers: {
        changeToB: (state) => {
            state.value = 'b';
        },
    },
});

export const { changeToB } = counterSlice.actions;
export default counterSlice.reducer;