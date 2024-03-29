import axios from "axios";

import Player from '../../components/player/Player'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import {closeIcon, heartIcon} from '../../utils/icons'
import './Description-Style.css'
import { useDispatch, useSelector } from "react-redux";
import {getServers, toggleShow, clearData} from '../../actions/description'
import {addFavorite, removeFavorite} from '../../actions/favorites'

const Description = (props) =>{
    const {show, info, getting_servers} = props.state

    const playerState = useSelector((state)=>state.player)
    const favorites = useSelector((state)=>state.favorites)
    const loader = <Loader type="Rings" color="#84cdfa"height={81} width={81}/>
    const dispatch = useDispatch()

    const genres = info? info.genres.map((genre, index)=><button  key={index} className={"genre-button"}>{genre}</button>) : null
    
    const render = !info?.episodes ? null : info.episodes.map((episode, index)=>{
         if(episode.nextEpisodeDate===null){
             return null
         }else if(episode.episode){
             return(
                <div className="test" key={index}  onClick={()=>dispatch(getServers(episode.id, info.title, index+1))} >{
                    <span className="test2">{`Episodio: ${episode.episode}`}</span>
                }</div>
             )
         }else{
             return(
                <div className="test" key={index}>{
                    <span className="test2">{`Proximo Episodio: ${episode.nextEpisodeDate}`}</span>
                }</div>
             )
         }
       
     }) 

  const closeDescription = () =>{
   
    dispatch(toggleShow())
    dispatch(clearData())
  }
  const setFavorite = () =>{
    let favorite  = {
        title: info.title, 
        id: info.id,
        poster: info.poster
    }
      if(thisFavorite===-1){
        dispatch(addFavorite(favorite))
        }else{
            dispatch(removeFavorite(favorite))
          }
      }
  const thisFavorite  = favorites.findIndex(x => x.title === info?.title)
  
    return (
        <div className={`${show? "anime-description-container": "invisible"}`}>
                {info? <>
                        
                 <div className="anime-description">
                   
                    <div className="title-image-container">
                       <img className="title-image" src={info.poster.length< 100 ? info.poster : `data:image/png;base64,${info.poster}`}alt="anime poster"></img>
                    </div>
                   
                    <div className="info-container">
                    <button className="close-description" onClick={()=>closeDescription()}>{closeIcon}</button>
                    <button className={thisFavorite===-1 ?  "save-favorite" : "remove-favorite" } onClick={()=>setFavorite()}>{heartIcon}</button>
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
                </>: loader }
                {getting_servers ?<Loader className="elevated-loader" type="Rings" color="#84cdfa"height={81} width={81}/> : null}
                {playerState.playing ? <Player state={playerState}></Player>: null}
             </div>
            
          
        
       
    )
}

export default Description