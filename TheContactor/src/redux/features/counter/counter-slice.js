import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: "",
    }, 
    reducers: {
        incrementCounter: (state) => {
            state.value += 1;
        },
        changeToBob: (state) => {
            state.value = "Bob";
        },
        changeToSteve: (state) => {
            state.value = "Steve";
        }
    },
});

export const { incrementCounter } = counterSlice.actions;
export const { changeToBob } = counterSlice.actions;
export const { changeToSteve } = counterSlice.actions;
export default counterSlice.reducer;