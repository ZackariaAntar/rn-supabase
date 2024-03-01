import { createSlice } from "@reduxjs/toolkit";

// RTK has loading and error built-in so might as well use it?
const initialState = {
	data: [],
	loading: false,
	error: null,
};

const templateSlice = createSlice({
	// The name property gets used by RTK middleware for namespacing actions,'template/fetchingData'.

	// It's technically taco, but should be unique from other slice names (taco, taco1, pizza)...
	// ...and be representative/symbolic of its state (clear is kind).

	// Ultimately, the property set for this slice in rootReducer is what get's added to store
	// Ex: const state = useSelector((store) => store.whateverIsInRootReducer)

	name: "template",
	initialState,

	// The reducers object replaces the switch casing we previously used.
	// Each property is exported as an 'action' which is imported within a thunk...
	// ...and then dispatched as a function() in a thunk

	// Dispatching in a thunk replaces the yield put({type:"SET_SOMETHING", payload:res.data}) saga logic
	// For example: dispatch(fetchedDataSuccess(res.data))

	reducers: {
		// naming conventions are gerund and past tense
		fetchingData: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchedDataSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
		},
		fetchedDataFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		resetStateAction: (state) => {
			state.data = [];
		},
		// RTK handles default, but I feel like there should be the option to clear it...
		// ...not sure about the consequences yet.
	},
	moreReducers: {
		// it's possible to write thunks here, but it feels wrong and makes me want to cry, so...
		// ...let's explore that another day.
	},
});

// Commenting these out cause I don't actually want this kicking around as I code.

// Exporting the actions so they are accessible in the thunks:

// export const {
// 	fetchingData,
// 	fetchedDataSuccess,
// 	fetchedDataFail,
// 	resetStateAction,
// } = templateSlice.actions;

// Exporting the slice to be included in the reducer:

// export default templateSlice.reducer;
