if (!process.env.EXPO_PUBLIC_SUPABASE_URL) {
	console.log(
		"constants.jsx",
		"Make sure you have a `.env` file to populate your variables."
	);
}

export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || "";
export const SUPABASE_ANON_KEY =
	process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "";
