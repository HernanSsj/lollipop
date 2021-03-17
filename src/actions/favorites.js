export const setFavoritesList =  (list) => async (dispatch) =>{
   
    try {
        
        dispatch({type: "SET_FAVORITES_LIST", payload: list})
            
        
    } catch (error) {
        console.log(error)
    }
}
export const addFavorite =  (favorite) => async (dispatch) =>{

    try {
        
        dispatch({type: "ADD_FAVORITE", payload: favorite})
            
        
    } catch (error) {
        console.log(error)
    }
}
export const removeFavorite =  (favorite) => async (dispatch) =>{
 
    try {
        
        dispatch({type: "REMOVE_FAVORITE", payload: favorite})
            
        
    } catch (error) {
        console.log(error)
    }
}
