import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		fetchingUserData(state){
			state.loading = true;
			state.error = null;
		},
		fetchedUserDataSuccess(state, action){
			state.loading = false;
			state.data = action.payload;
		},
		fetchedUserDataFail(state, action){
			state.loading = false;
			state.error = action.payload;
		},
		clearUserData(state){
			state.data = [];
		},
	}
});

export const {
	fetchingUserData,
	fetchedUserDataSuccess,
	fetchedUserDataFail,
	clearUserData,
} = userSlice.actions;

export default userSlice.reducer;
