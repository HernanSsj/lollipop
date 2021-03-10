
const initialSearchState = {
    results: null,
    loading: false,
    value: ""
 }
 const loginReducer = (state=initialSearchState, action) =>{
     switch(action.type){
         case "SET_SEARCH_VALUE":
             return {
                 ...state, value: action.payload
             };
      case "SET_SEARCH_RESULT":
             return {
                 ...state, results: action.payload
             };
     case "TOGGLE_SEARCH_LOADING":
             return {
                 ...state, loading: !state.loading
             };
         default:
             return state;
     }
 }
 
 export default loginReducer