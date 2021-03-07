
const initialLoginFormState = {
   email: "", 
   password: "",
   error: false,
   loading: false,
   stayOnline: false,
   showPassword: false


}
const loginReducer = (state=initialLoginFormState, action) =>{
    switch(action.type){
        case "SET_LOGIN_FORM_EMAIL":
            return {
                ...state, email: action.payload
            };
        case "SET_LOGIN_FORM_PASSWORD":
                return {
                    ...state, password: action.payload
                };
        case "CLEAR_LOGIN_FORM_DATA":
            return{
                ...state, password: "", email:""
            };
        case "TOGGLE_STAY_ONLINE":
            return{
                ...state, stayOnline: !state.stayOnline
            };
        case "TOGGLE_LOGIN_FORM_SHOW_PASSWORD":
            return {
                ...state, showPassword: !state.showPassword
            }
        case "TOGGLE_LOGIN_FORM_LOADING":
            return{
                ...state, loading: !state.loading
            };
        case "SET_LOGIN_FORM_ERROR":
            return{
                    ...state, error: action.payload
                };
        default:
            return state;
    }
}

export default loginReducer