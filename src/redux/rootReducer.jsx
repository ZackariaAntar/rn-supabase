import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import todo from "./slices/todoSlice"
import user from "./slices/userSlice"
import count from "./slices/counterSlice"

const rootReducer = combineReducers({
    auth,
    todo,
    user,
    count
})

export default rootReducer