// const initialState = {
//     user:null
//   }
export default (user={}, action) =>{
    switch(action.type){
        case "FETCH_CURRENT":
           
            return action.payload;
       
        default:
            return user;
    }
}