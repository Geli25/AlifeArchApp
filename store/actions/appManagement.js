import { CHANGE_RESET } from './actionTypes';

export const changeReset = (bool) => {
    return {
        type: CHANGE_RESET,
        resetState:bool
    }
}