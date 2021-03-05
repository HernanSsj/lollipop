import { playIcon } from '../../utils/icons'
import './New-Episode-Cover-Style.css'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import {togglePlay, addNewEpisodeServers, addTitle, addEpisode} from '../../actions/player'
import {useDispatch} from "react-redux"

const NewEpisodeCover = (props) =>{
    const {title, poster, episode ,  id, servers} = props.info
   const dispatch = useDispatch()
   const send = ()=>{
       dispatch(addNewEpisodeServers(servers))
       dispatch(addTitle(title))
       dispatch(addEpisode(episode))
       dispatch(togglePlay())
   }
    return (
        <div className="new-episode-container">
              <span className={"episode-number"}>{`Ep. ${episode}`}</span>
                     <div className="new-episode-image-container" onClick={()=>send()}>
                  <span className="new-anime-play-icon">{playIcon}</span>
                  <img width={'225px'} height={'160px'} src={`data:image/png;base64, ${poster}`} alt="anime cover" className="new-episode-img"/>
              </div>
          
             
            <div className="new-anime-title-container">
                    <span className="new-anime-title">{title}</span> 
              </div> 
        </div>
      
    )
}

export default NewEpisodeCover