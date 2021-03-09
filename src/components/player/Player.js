import './Player-Style.css'
import { useDispatch} from "react-redux";
import {togglePlay, cleanServers, setSelectedServer} from '../../actions/player'
import {closeIcon} from '../../utils/icons'

const Player = (props) =>{
    const dispatch = useDispatch()
    const {servers, title, episode, playing, selected} = props.state
    const selectionButtons = servers.map((server, index)=><button key={index} className={`${server.title===servers[selected].title ? "selected-select-button" : "select-button"}`} onClick={()=>dispatch(setSelectedServer(index))}>{server.title}</button>)
    const iframe = <iframe className={"iframe"} key={servers[selected].code} title={servers[selected].title} src={servers[selected].code} frameBorder="0" allowFullScreen></iframe>
    
    const closePlayer= () =>{
        dispatch(cleanServers())
        dispatch(togglePlay())
    }

   return(
       <div className={`${playing? "player-container" : "invisible"}`}>
           <div className="player-title-container">
           <button className="salir" onClick={()=>closePlayer()}>{closeIcon}</button>
            <span className="player-anime-title">{title}</span>
            <span className="player-episode-number">{`Episode ${episode}`}</span>
           </div>
           <div className="server-list">{selectionButtons}</div>
           <div className={"player-iframe"}> {iframe}</div>
           
       </div>
     
   )
}

export default Player