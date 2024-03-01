import { loginRequest, loginSuccess, loginFailure } from "../slices/authSlice";
import { supabase } from "../services/supabase/supabase"; // Assuming you have a Supabase client instance

export const loginUser = (credentials) => async (dispatch) => {
	dispatch(loginRequest());
	try {
		const { user, error } = await supabase.auth.signIn(credentials);

		if (error) {
			dispatch(loginFailure(error.message));
		} else {
			dispatch(loginSuccess(user));
		}
	} catch (error) {
		dispatch(loginFailure("An error occurred while logging in."));
	}
};
