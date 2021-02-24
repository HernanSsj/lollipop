import './Anime-Cover-Style.css'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
const AnimeCover = (props) =>{

const title = (props) => props.title.length > 30 ? `${props.title.substring(0, 30)}...` : props.title;
const animeInfoUrl = props.title.replace(/\ /g, '-')
    return (
        <div className="anime-cover-container">
              <Link to={`/info/${animeInfoUrl}`}>
              <div className="cover-container">
                    <img width={'133px'} height={'195px'} src={props.image} alt="anime cover" className="anime-cover-img"/>
              </div>
              </Link>
              <div className="anime-cover-title-container">
                    <span className="anime-cover-title">{title(props)}</span> 
              </div>
             
        </div>
      
    )
}

export default AnimeCover 