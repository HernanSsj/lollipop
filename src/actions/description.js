import axios from 'axios'
import {addNewEpisodeServers, addEpisode, addTitle, togglePlay} from './player'
export const toggleShow = () => async (dispatch) =>{
    console.log("gotgiln dsc")
    try {
    
    dispatch({ type: "TOGGLE_SHOW"});
    
        
    } catch (error) {
        dispatch({ type: "TOGGLE_SHOW"});
    }
}

export const fetchDescription = (title) => async (dispatch) =>{
    try {
        const description = await axios.get(`https://protected-reaches-41658.herokuapp.com/api/v3/moreInfo/${title}`)
        const episodes =await axios.get(`https://protected-reaches-41658.herokuapp.com/api/v3/getEpisodes/${title}`)
         
        let info = {
            poster: description.data.poster,
            debut: description.data.status,
            episodes: episodes.data.episodes,
            genres: description.data.genres,
            rating: description.data.rating,
            synopsis: description.data.synopsis,
            title: description.data.title,
            type: description.data.type
        }
     
        dispatch({ type: "ADD_INFO", payload: info});
      
        
    } catch (error) {
        console.log(error)
    }
}
export const setDescription = (data) => async (dispatch) =>{
    try {
      
        dispatch({ type: "ADD_INFO", payload: data});
      
        
    } catch (error) {
        console.log(error)
    }
}


export const getServers =  (id, title, episode) => async (dispatch) =>{
    
    try {
        
        dispatch({type: "TOGGLE_GETTING_SERVERS"})
            
        const response =  await axios.get(`https://salty-hollows-03690.herokuapp.com/api/v1/getAnimeServers/${id}`)

        dispatch(addNewEpisodeServers(response.data.servers));
        dispatch(addTitle(title));
        dispatch(addEpisode(episode));
        dispatch(togglePlay());

        dispatch({type: "TOGGLE_GETTING_SERVERS"})
        
    } catch (error) {
        console.log(error)
    }
}

