import { CHANGE_RESET,UPDATE_DETECTION,CLEAR_DETECTION } from './actionTypes';

export const changeReset = (bool) => {
    return {
        type: CHANGE_RESET,
        resetState:bool
    }
}

export const updateDetection = (objectDetected) =>{
    return {
        type: UPDATE_DETECTION,
        objectDetected: objectDetected
    }
}

export const clearDetection = () =>{
    return {
        type: CLEAR_DETECTION
    }
}