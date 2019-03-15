import { CHANGE_RESET } from "../actions/actionTypes";

const initialState = {
    resetState:false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_RESET:
            return {
                ...state,
                resetState:action.resetState
            }
        default:
            return state;
    }
}

export default reducer;