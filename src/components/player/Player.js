import './Player-Style.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {togglePlay, cleanServers} from '../../actions/player'
import {closeIcon} from '../../utils/icons'
const Player = (props) =>{
    const {servers, title, episode, playing} = props
    console.log("player Props",props)
    const dispatch = useDispatch()
    const [selectedServer, setSelectedServer] = useState(servers[0])

    const selectionButtons = servers.map((server, index)=><button className={`${server.title==selectedServer.title ? "selected-select-button" : "select-button"}`} onClick={()=>setSelectedServer(props.servers[index])}>{server.title}</button>)
    const iframe = selectedServer ? <iframe className={"iframe"} key={selectedServer.code} src={selectedServer.code} frameBorder="0" allowFullScreen></iframe> : null
    
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