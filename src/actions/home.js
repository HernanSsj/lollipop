export const toggleLoading = () => async (dispatch) =>{
 
    try {
        
      dispatch({ type: "TOGGLE_HOME_LOADING"});
       
        
    } catch (error) {
  
      console.log(error)
    }
}
export const setAnimes = (animes) => async (dispatch) =>{
 
    try {
        
      dispatch({ type: "SET_HOME_ANIMES", payload:animes});
       
        
    } catch (error) {
  
      console.log(error)
    }
}
export const setEpisodes = (episodes) => async (dispatch) =>{
 
    try {
        
      dispatch({ type: "SET_HOME_EPISODES", payload: episodes});
       
        
    } catch (error) {
  
      console.log(error)
    }
}