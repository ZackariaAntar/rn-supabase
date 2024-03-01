import {
	fetchingTodoData,
	fetchedTodoDataSuccess,
	fetchedTodoDataFail,
	clearTodoData,
} from "../slices/todoSlice";

import {supabase} from '../../services/supabase/supabase'

export const getTodos = () => async (dispatch) => {
	dispatch(fetchingTodoData());
    try {
        const todos = await supabase

    } catch (error) {

    }
};

export const addTodos = () => (dispatch) => {
	dispatch(sub());
};
export const deleteTodos = () => (dispatch) => {
	dispatch(erase());
};
