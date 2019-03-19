import { CHANGE_RESET,UPDATE_DETECTION,CLEAR_DETECTION,SET_LOADING } from './actionTypes';

export const setLoading=(bool)=>{
    return{
        type:SET_LOADING,
        loading:bool
    }
}

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