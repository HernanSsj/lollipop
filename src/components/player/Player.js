import './Player-Style.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {togglePlay} from '../../actions/player'
import {closeIcon} from '../../utils/icons'
const Player = (props) =>{
    
    const dispatch = useDispatch()
    const [selectedServer, setSelectedServer] = useState(props.servers[0])
    const [loading, setLoading] = useState(true)
    const playing = props.playing
    console.log(props)
    const selectionButtons = props.servers.map((server, index)=><button className={`${server.title==selectedServer.title ? "selected-select-button" : "select-button"}`} onClick={()=>setSelectedServer(props.servers[index])}>{server.title}</button>)
    const iframe = selectedServer ? <iframe className={"iframe"} key={selectedServer.title} src={selectedServer.code} frameBorder="0" allowFullScreen></iframe> : null
   return(
       <div className={`${playing? "player-container" : "invisible"}`}>
           <div className="player-title-container">
           <button className="salir" onClick={()=>dispatch(togglePlay())}>{closeIcon}</button>
            <span className="player-anime-title">{props.title}</span>
            <span className="player-episode-number">{`Episode ${props.episode}`}</span>
           </div>
           <div className="server-list">{selectionButtons}</div>
           <div className={"player-iframe"}> {iframe}</div>
           
       </div>
     
   )
}

export default Player