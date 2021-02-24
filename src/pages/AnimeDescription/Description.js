import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { withRouter } from 'react-router-dom'
import Navbar from '../../components/navbar2/navbar'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import './Description-Style.css'
const Description = (props) =>{
    const location = useLocation();
    let title =  props.match.params.title.replace(/-/g, ' ')
    const [gettingDetails, setGettingDetails] = useState(true)
    const [info, setInfo] = useState(null)
    const [episodesList, setEpisodesList] = useState({loading: true, data:null})
    const loader = <Loader type="Rings" color="#84cdfa"height={81} width={81}/>
    useEffect(()=>{
        async function fetchDescription() {
            const response = await axios.get(`http://localhost:4000/api/v3/moreInfo/${title}`)
         
             setInfo(response.data)
          
                   setGettingDetails(false)
                
        }
         
            fetchDescription()
        async function fetchEpisodesList() {
                const response = await axios.get(`http://localhost:4000/api/v3/getEpisodes/${title}`)
              
              setEpisodesList({...episodesList, data: response.data , loading: false})
              
            }
             
                fetchEpisodesList()
         
            },[])
    const genres = info ? info.genres.map((genre, index)=><button  key={index} className={"genre-button"}>{genre}</button>) : null
     const render = episodesList.loading ? null : episodesList.data.episodes.reverse().map((episode, index)=><button  className="test" key={index} >{episode.episode}</button>) 
    console.log(episodesList)
    return (
            
             <div className="anime-description-container">
                 <Navbar/>
                
            
                 <div className="anime-description">
                    <div className="title-image-container">
                        {
                            info ?   <img className="title-image" src={info.poster} alt="anime poster"></img> : loader
                        }
                      
    
                    </div>
                   
                    <div className="info-container">
                        {
                            info ? 
                            <>
                            <span className="anime-title">{info.title}</span>
                             <div className="genres-container">
                            {genres}
                        </div>
                        <span className="sinopsis-title">Sinopsis:</span>
                        <br></br>
                        <span className="sinopsys">{info.synopsis}</span>

                            </>:
                            loader
                        }
                       
                    </div> 
                 </div>
                 <div className="bottom-section">
                        <div className="options-container">
                            <button className="ep">Episodios</button>
                            <button className="pj">Personajes</button>
                        </div>
                        <div className="selected">
                        {
                            episodesList.loding ?  loader :  render 
                        }
                        </div> 
                    </div>
                
             </div>
            
          
        
       
    )
}

export default withRouter(Description)