
import axios from 'axios'
import './lollipop-style.css'
import { useEffect} from 'react'
import { useSelector , useDispatch} from "react-redux";
import { useHistory } from "react-router"
import {deleteUser} from '../../actions/users'
import Navbar from '../../components/navbar2/navbar'
import ItemCarrousel from '../../components/carrousel/Carrousel'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Player from '../../components/player/Player'
import Description from '../../components//AnimeDescription/Description'
import {setAnimes, setEpisodes, toggleLoading} from '../../actions/home'


const Lollipop =  (props)=>{
    const dispatch = useDispatch()
    const playerState = useSelector((state)=>state.player)
    const descriptionState = useSelector((state=>state.description))
    const homeState = useSelector((state)=>state.home)
    const {episodes, animes, loading} = homeState
    let history = useHistory()
   useEffect(()=>{

    async function fetchData() {
        let latestEpisodes = await axios.get("https://salty-hollows-03690.herokuapp.com/api/v1/LatestEpisodesAdded")
       dispatch(setEpisodes(latestEpisodes.data))
       let latestAnime= await axios.get("https://salty-hollows-03690.herokuapp.com/api/v1/LatestAnimeAdded")
       dispatch(setAnimes(latestAnime.data))
          
       if(loading){
        setTimeout(() => {
            dispatch(toggleLoading())
         }, 1000);
       }
    }
     
        fetchData(loading)
        },[])
    return <div className='main-app-container'>

        <Navbar/>
        {loading ?  <Loader type="Rings" color="#84cdfa"height={81} width={81}/>: <div className="carousel-container"><ItemCarrousel episodes={episodes} animes={animes}/></div> }
        
        {playerState.playing ? <Player state={playerState}></Player>: null}
        {descriptionState.show ? <Description state={descriptionState}/> : null}
        </div>
}
export default Lollipop