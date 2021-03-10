import axios from 'axios'
export const fillName = (name) => async (dispatch) =>{
    try {
        
        dispatch({type: "SET_SIGNUP_FORM_NAME", payload: name})
        
    } catch (error) {
        console.log(error);
    }
}

export const fillEmail = (email) => async (dispatch) =>{
    try {
        
        dispatch({type: "SET_SIGNUP_FORM_EMAIL", payload: email})
        
    } catch (error) {
        console.log(error);
    }
}


export const fillPassword = (password) => async (dispatch) =>{

    try {
        
        dispatch({type: "SET_SIGNUP_FORM_PASSWORD", payload: password})
        
    } catch (error) {
        console.log(error);
    }
}


export const fillRepeatedPassword = (repeated_password) => async (dispatch) =>{
    try {
        
        dispatch({type: "SET_SIGNUP_FORM_REPEATED_PASSWORD", payload: repeated_password})
        
    } catch (error) {
        console.log(error);
    }
}

export const toggleShowPassword = () => async (dispatch) =>{
    try {
        
        dispatch({type: "TOGGLE_SIGNUP_FORM_SHOW_PASSWORD"})
        
    } catch (error) {
        console.log(error);
    }
}

export const toggleLoading = () => async (dispatch) =>{
    try {
        console.log("TOGGLIN LADING")
        dispatch({type: "TOGGLE_SIGNUP_FORM_LOADING"})
        
    } catch (error) {
        console.log(error);
    }
}

export const setError = (error) => async (dispatch) =>{
    try {
        
        dispatch({type: "SET_SIGNUP_FORM_ERROR", payload:error})
        
    } catch (error) {
        console.log(error);
    }
}

export const setCompleted = (completed) => async (dispatch) =>{
  
    try {
        console.log("action called", completed)
        dispatch({type: "SET_SIGNUP_FORM_COMPLETE", payload: completed})
        
    } catch (error) {
        console.log(error);
    }
}