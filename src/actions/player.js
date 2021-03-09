
export const togglePlay = () => async (dispatch) =>{
    try {
     
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


export const setSelectedServer = (server) => async (dispatch) =>{
  try {
     
        dispatch({ type: "SET_SELECTED", payload: server});
    
      
  } catch (error) {
      console.log(error)
  }
}


export const cleanServers = () => async (dispatch) =>{
 
  try {
     
        dispatch({ type: "CLEAR_SERVERS", payload: null});
    
      
  } catch (error) {
      console.log(error)
  }
}