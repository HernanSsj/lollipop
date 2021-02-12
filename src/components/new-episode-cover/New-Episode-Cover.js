import { playIcon } from '../../utils/icons'
import './New-Episode-Cover-Style.css'

const NewEpisodeCover = (props) =>{
     console.log(props)
    return (
        <div className="new-episode-container">
              <span className={"episode-number"}>{props.episode}</span>
              {/* <div className="new-episode-play-icon">{playIcon}</div> */}
              <div className="new-episode-image-container">
                  <img width={'225px'} height={'160px'} src={`data:image/png;base64, ${props.image}`} alt="anime cover" className="new-episode-img"/>
              </div>
            <div className="new-anime-title-container">
                    <span className="new-anime-title">{props.title}</span> 
              </div> 
        </div>
      
    )
}

export default NewEpisodeCover