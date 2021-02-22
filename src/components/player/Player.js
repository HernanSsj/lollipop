import './Player-Style.css'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useSelector } from "react-redux";
const Player = (props) =>{
    const playing = props.playing
    // let { episode, title } = useParams();
    // let parsedTitle =   title.replace(/-/g, ' ')
    // const {gettingServers, setGettingServers} = useState(true)
    // const getServer = (id) =>{
    //     axios.get(`http://localhost:4000/api/v3/getAnimeServers/${id}`)
    //     .then((res)=>console.log(res.data))
    // }
    // useEffect(()=>{
    //     var start = window.performance.now();
    //      axios.get(`http://localhost:4000/api/v3/getEpisodes/${parsedTitle}`)
    //      .then((response)=>{
    //         let found = response.data.episodes.find(function(chapter, index) {
    //             if(chapter.episode == episode)
    //                 return true;
    //          });
    //          console.log(found)
    //         getServer(found.id)
    //      })
        
    // },[])
    console.log("player props", props)
   return(
       <div className={`${playing? "player-container" : "invisible"}`}>
           <div className="player-title-container">
            <span className="player-anime-title">{props.title}</span>
            <span className="player-episode-number">{props.episode}</span>
           </div>
           <div className="server-list">Seleccion de servers</div>
            <iframe className={"player-iframe"} src="https://streamtape.com/e/pb44XDboKzfrpZR/" frameBorder="0" allowFullScreen></iframe>
       </div>
     
   )
}

export default Player