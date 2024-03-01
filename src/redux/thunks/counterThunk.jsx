import { add, sub, erase} from "../slices/counterSlice";

export const addToCount = () => (dispatch) => {
	dispatch(add());

};

export const subFromCount = () => (dispatch) =>{
    dispatch(sub())
}
export const clearCount = () => (dispatch) =>{
    dispatch(erase())
}
