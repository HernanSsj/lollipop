
export const fillValue = (value) => async (dispatch) =>{
    try {
       
        dispatch({type: "SET_SEARCH_VALUE", payload: value})
        
    } catch (error) {
        console.log(error);
    }
}


export const fillResults = (result) => async (dispatch) =>{
    try {
        
        dispatch({type: "SET_SEARCH_RESULT", payload: result})
        
    } catch (error) {
        console.log(error);
    }
}
export const toggleLoading = () => async (dispatch) =>{
    try {
        
        dispatch({type: "TOGGLE_SEARCH_LOADING"})
        
    } catch (error) {
        console.log(error);
    }
}
