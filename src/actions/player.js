import axios from 'axios'
export const togglePlay = () => async (dispatch) =>{
    try {
      console.log("dips")
    dispatch({ type: "TOGGLE_PLAY"});
    
        
    } catch (error) {
        dispatch({ type: "TOGGLE_PLAY"});
    }
}

export const addNewEpisodeServers = (servers) => async (dispatch) =>{
  try {
      
    dispatch({ type: "ADD_SERVERS", payload: servers});
     
      
  } catch (error) {

    console.log(error)
  }
}

export const addTitle = (title) => async (dispatch) =>{
  try {
     
        dispatch({ type: "ADD_TITLE", payload: title});
    
      
  } catch (error) {
      console.log(error)
  }
}


export const addEpisode = (episode) => async (dispatch) =>{
  try {
     
        dispatch({ type: "ADD_EPISODE", payload: episode});
    
      
  } catch (error) {
      console.log(error)
  }
}