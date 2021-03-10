
const signupInitialState = {
       name: "",
       email: "",
       password: "",
       repeated_password: "",
       showPassword: false,
       completed: false,
       loading: false,
       error: {
        error: false,
        name_error: false,
        email_error: false,
        password_error: false,
        repeated_password_error: false,
        error_message: null
     }
  }

const signupReducer = (state=signupInitialState, action) =>{
    switch(action.type){
        case "SET_SIGNUP_FORM_NAME":
            return {
                ...state, name: action.payload
            };
        case "SET_SIGNUP_FORM_EMAIL":
            return {
                ...state, email: action.payload
            };  
        case "SET_SIGNUP_FORM_PASSWORD":
            return {
                ...state, password: action.payload
            };   
        case "SET_SIGNUP_FORM_REPEATED_PASSWORD":
            return {
                ...state, repeated_password: action.payload
            };   
        case "TOGGLE_SIGNUP_FORM_SHOW_PASSWORD":
            return {
                ...state, showPassword: !state.showPassword
            };  
       case "TOGGLE_SIGNUP_FORM_LOADING":
            return {
                ...state, loading: !state.loading
            }; 
       case "SET_SIGNUP_FORM_ERROR":
            return {
                ...state, error: action.payload
            }; 
      case "SET_SIGNUP_FORM_COMPLETE":
            return {
               
                ...state, completed: action.payload
            }; 
        default:
            return state;
    }
}

export default signupReducer