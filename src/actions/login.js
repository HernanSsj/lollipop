export const toggleShowPassword = () => async (dispatch) =>{
 
    try {
        
      dispatch({ type: "TOGGLE_LOGIN_FORM_SHOW_PASSWORD"});
       
        
    } catch (error) {
  
      console.log(error)
    }
  }

export const toggleLoading= () => async (dispatch) =>{
  
    try {
        
      dispatch({ type: "TOGGLE_LOGIN_FORM_LOADING"});
       
        
    } catch (error) {
  
      console.log(error)
    }
  }
export const setError= (boolean) => async (dispatch) =>{
  
    try {
        
      dispatch({ type: "SET_LOGIN_FORM_ERROR", payload:boolean});
       
        
    } catch (error) {
  
      console.log(error)
    }
  }
export const fillEmail= (data) => async (dispatch) =>{

    try {
        
      dispatch({ type: "SET_LOGIN_FORM_EMAIL", payload: data});
      dispatch({ type: "SET_LOGIN_FORM_ERROR", payload: false});
       
        
    } catch (error) {
  
      console.log(error)
    }
  }
export const fillPassword= (data) => async (dispatch) =>{

    try {
        
      dispatch({ type: "SET_LOGIN_FORM_PASSWORD", payload: data});
      dispatch({ type: "SET_LOGIN_FORM_ERROR", payload: false});
        
    } catch (error) {
  
      console.log(error)
    }
  }
  export const clearLoginFormData= () => async (dispatch) =>{
    try {
        
      dispatch({ type: "CLEAR_LOGIN_FORM_DATA"});
       
        
    } catch (error) {
  
      console.log(error)
    }
  }