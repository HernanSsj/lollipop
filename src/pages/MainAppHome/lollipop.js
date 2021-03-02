
import axios from 'axios'
import './lollipop-style.css'
import { useHistory } from "react-router"
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../actions/users'
import Navbar from '../../components/navbar2/navbar'
import ItemCarrousel from '../../components/carrousel/Carrousel'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { useEffect, useState } from 'react'
import Player from '../../components/player/Player'
import { useSelector } from "react-redux";

const Lollipop =  (props)=>{

    const playerState = useSelector((state)=>state.player)
    const dispatch = useDispatch()
    let history = useHistory()
    const [episodes, setEpisodes] = useState({})
    const [animes, setAnimes] = useState({})
    const [loading, setLoading] = useState(true)

   useEffect(()=>{
    async function fetchData() {
        let latestEpisodes = await axios.get("https://salty-hollows-03690.herokuapp.com/api/v1/LatestEpisodesAdded")
       setEpisodes(latestEpisodes.data)
       let latestAnime= await axios.get("https://salty-hollows-03690.herokuapp.com/api/v1/LatestAnimeAdded")
       setAnimes(latestAnime.data)
          
      
       setTimeout(() => {
               setLoading(false)
            }, 1000);
    }
     
        fetchData()
     
        },[])
   const logout = () => {
       
    axios.get('http://localhost:5000/auth/logout', {withCredentials: true}).then(()=>{
        
        dispatch(deleteUser())

        // history.push("/")
    })
    .catch(()=>dispatch(deleteUser()))
   }

    return <div className='main-app-container'>

        <Navbar/>
        {loading ?  <Loader type="Rings" color="#84cdfa"height={81} width={81}/>: <div className="carousel-container"><ItemCarrousel episodes={episodes} animes={animes}/></div> }
        
        {playerState.playing ? <Player playing={playerState.playing} servers={playerState.servers} title={playerState.title} episode={playerState.episode}></Player>: null}
        </div>
}
export default Lollipop