// const initialState = {
//     user:null
//   }
const userReducer = (user=null, action) =>{
    switch(action.type){
        case "FETCH_CURRENT":
           
            return action.payload;
        case "DELETE_CURRENT":
            return null
        default:
            return user;
    }
}

export default userReducer