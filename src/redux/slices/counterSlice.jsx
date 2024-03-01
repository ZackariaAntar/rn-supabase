import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:0}

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		add(state,action) {
			state.value += 1
		},
		sub(state, action) {
            state.value -=1
		},
		erase(state, action) {
            state.value = 0
		},
	},
});

export const {
add, sub, erase
} = counterSlice.actions;

export default counterSlice.reducer;
