import { CHANGE_RESET,CLEAR_DETECTION,UPDATE_DETECTION } from "../actions/actionTypes";

const initialState = {
    resetState:false,
    detected:null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_RESET:
            return {
                ...state,
                resetState:action.resetState
            }
        case UPDATE_DETECTION:
            return {
                ...state,
                detected:action.objectDetected
            }
        case CLEAR_DETECTION:
            return {
                ...state,
                detected:null
            }
    default:
        return state;
    }
}

export default reducer;