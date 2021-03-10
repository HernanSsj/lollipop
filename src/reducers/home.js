
const initialHomeState = {
   episodes : null,
   animes: null,
   loading: true
 }
 const loginReducer = (state=initialHomeState, action) =>{
     switch(action.type){
         case "SET_HOME_EPISODES":
             return {
                 ...state, episodes: action.payload
             };
      case "SET_HOME_ANIMES":
             return {
                 ...state, animes: action.payload
             };
     case "TOGGLE_HOME_LOADING":
             return {
                 ...state, loading: !state.loading
             };
         default:
             return state;
     }
 }
 
 export default loginReducer