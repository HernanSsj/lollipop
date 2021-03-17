const favorites = []
const favoritesReducer = (state=favorites, action) =>{
    switch(action.type){
        case "SET_FAVORITE_LIST":
            return state = action.payload
        case "ADD_FAVORITE":
            return [...state, action.payload];
        case "REMOVE_FAVORITE":
            return state.filter( (favorite)=> favorite.id !== action.payload.id) 
        default:
            return state;
    }
}

export default favoritesReducer