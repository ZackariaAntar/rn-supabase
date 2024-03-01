import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import {
	SafeAreaView,
	StyleSheet,
	Button,
	Text,
	View,
	TextInput,
} from "react-native";

import {
	addToCount,
	subFromCount,
	clearCount,
} from "../redux/thunks/counterThunk";


import Auth from "../components/Auth";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../services/supabase/supabase";
import { useEffect, useState } from "react";


export default function App() {

  const [session, setSession] = useState(null)

  useEffect(()=>{
    // supabase.auth.getSession().then(({data:{session}})=>{
    //   setSession(session)
    // })

    // supabase.auth.onAuthStateChange((_event, session) => {
	// 	setSession(session);
	// });

  },[])

  const count = useSelector((store) => store.count);
  const todos = useSelector((store) => store.todos)

	const dispatch = useDispatch();








	return (
			<View style={styles.container}>
				<Text style={styles.regText}>Testing Redux</Text>
				<View>
					<Text style={styles.medText}>
						{`Current Value:  ${count.value}`}
					</Text>
					<View style={styles.flexRow}>
						<Button
							onPress={() => dispatch(addToCount())}
							title={`   +   `}
						/>
						<Button
							onPress={() => dispatch(subFromCount())}
							title={`   -   `}
						/>
					</View>
					<View style={styles.flexCol}>
						<View>
							<Button
								onPress={() => dispatch(clearCount())}
								title="Clear"
							/>
						</View>
					</View>
				</View>
				<View style={styles.flexCol}>
					<Text style={styles.medText}>Todos</Text>

					<View style={styles.flexRow}>
						<TextInput style={styles.input} />
					</View>

					<Button
						onPress={() => dispatch(addToCount())}
						title={` Add todo   +   `}
					/>
				</View>
				<StatusBar style="auto" />
			</View>
	);
}

const styles = StyleSheet.create({
	container: {
    height:'100%',
    width:'100%',
    display:'flex',
    flexDirection:'column',
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
    padding:20,
	},
	mainView: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		padding: "15px",
	},
	flexCol: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
	},
	flexRow: {
		flex: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		marginTop: 15,
	},
	bigText: { fontSize: 50 },
	medText: { fontSize: 30 },
	regText: { fontSize: 14 },
	button: {
		display: "flex",
		alignItems: "center",
		border: "1px solid transparent",
		borderRadius: "8px",
		fontSize: 15,
		width: "75%",
		marginTop: "20px",
		marginBottom: "10px",
		padding: "10px",
	},

	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: "100%",
	},
});
