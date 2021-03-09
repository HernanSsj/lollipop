
import axios from 'axios'
import './lollipop-style.css'
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useHistory } from "react-router"
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../actions/users'
import Navbar from '../../components/navbar2/navbar'
import ItemCarrousel from '../../components/carrousel/Carrousel'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Player from '../../components/player/Player'
import Description from '../../components//AnimeDescription/Description'


const Lollipop =  (props)=>{
    const dispatch = useDispatch()
    const playerState = useSelector((state)=>state.player)
    const DescriptionState = useSelector((state=>state.description))
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
          
      console.log(latestAnime.data)
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
        
        {playerState.playing ? <Player state={playerState}></Player>: null}
        {DescriptionState.show ? <Description state={DescriptionState}/> : null}
        </div>
}
export default Lollipop