import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { withRouter } from 'react-router-dom'
import Navbar from '../../components/navbar2/navbar'
import Player from '../../components/player/Player'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import './Description-Style.css'
import { useDispatch, useSelector } from "react-redux";
import {togglePlay, addNewEpisodeServers, addTitle, addEpisode} from '../../actions/player'
const Description = (props) =>{
    const location = useLocation();
    let title =  props.match.params.title.replace(/-/g, ' ')
    const playerState = useSelector((state)=>state.player)
    const [gettingDetails, setGettingDetails] = useState(true)
    const [info, setInfo] = useState(null)
    const [episodesList, setEpisodesList] = useState({loading: true, data:null})
    const [gettingServers, setGettingServers] = useState({loading: false, data:null})
    const loader = <Loader type="Rings" color="#84cdfa"height={81} width={81}/>
    const dispatch = useDispatch()
    useEffect(()=>{
        async function fetchDescription() {
            const response = await axios.get(`https://protected-reaches-41658.herokuapp.com/api/v3/moreInfo/${title}`)
         
             setInfo(response.data)
          
                   setGettingDetails(false)
                
        }
         
            fetchDescription()
        async function fetchEpisodesList() {
                const response = await axios.get(`https://protected-reaches-41658.herokuapp.com/api/v3/getEpisodes/${title}`)
              console.log(response.data)
              setEpisodesList({...episodesList, data: response.data , loading: false})
              
            }
             
                fetchEpisodesList()
         
            },[])
          
    const getServers = async (id, title, episode) =>{
        setGettingServers({...gettingServers, loading: true})
        console.log("waiting")
        let response = await axios.get(`https://salty-hollows-03690.herokuapp.com/api/v1/getAnimeServers/${id}`)
        dispatch(addNewEpisodeServers(response.data.servers))
        dispatch(addTitle(title))
        dispatch(addEpisode(episode))
        dispatch(togglePlay())
        setGettingServers({...gettingServers, loading: false})
    }
    const genres = info ? info.genres.map((genre, index)=><button  key={index} className={"genre-button"}>{genre}</button>) : null
    const render = episodesList.loading ? null : episodesList.data.episodes.reverse().map((episode, index)=>{
         if(episode.episode === undefined){
             return (
                <div className="test" key={index}>{
                    <span className="test2">{`Proximo Episodio: ${episode.nextEpisodeDate}`}</span>
                }</div>
             )
         }else{
             return(
                <div className="test" key={index}  onClick={()=>getServers(episode.id, title, episode.episode )} >{
                    <span className="test2">{`Episodio: ${episode.episode}`}</span>
                }</div>
             )
         }
       
     }) 
    // console.log(episodesList)
    return (
            
             <div className="anime-description-container">
                 <Navbar/>
                
                {info ? <>
                        
                 <div className="anime-description">
                    <div className="title-image-container">
                       <img className="title-image" src={info.poster} alt="anime poster"></img>
                    </div>
                   
                    <div className="info-container">
                            <span className="anime-title">{info.title}</span>
                             <div className="genres-container">
                            {genres}
                        </div>
                        <span className="sinopsis-title">Sinopsis:</span>
                        <br></br>
                        <span className="sinopsys">{info.synopsis}</span>                      
                    </div> 
                 </div>
                 <div className="bottom-section">
                        <div className="options-container">
                            <button className="ep">Episodios</button>
                            <button className="pj">Personajes</button>
                        </div>
                        <div className="selected">
                        {
                            render 
                        }
                        </div> 
                    </div>
                </>: loader}
                {gettingServers.loading? <div className="elevated-loader">{loader}</div> : null}
                {playerState.playing ? <Player playing={playerState.playing} servers={playerState.servers} title={playerState.title} episode={playerState.episode}></Player>: null}
             </div>
            
          
        
       
    )
}

export default withRouter(Description)