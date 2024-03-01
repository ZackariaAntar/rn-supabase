import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		fetchingTodoData(state){
			state.loading = true;
			state.error = null;
		},
		fetchedTodoDataSuccess(state, action){
			state.loading = false;
			state.data = action.payload;
		},
		fetchedTodoDataFail(state, action){
			state.loading = false;
			state.error = action.payload;
		},
		clearTodoData(state){
			state.data = [];
		},
	},
});

export const {
	fetchingTodoData,
	fetchedTodoDataSuccess,
	fetchedTodoDataFail,
	clearTodoData,
} = todoSlice.actions;

export default todoSlice.reducer;
