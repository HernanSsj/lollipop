import './Anime-Cover-Style.css'

const AnimeCover = (props) =>{

const title = (props) => props.title.length > 30 ? `${props.title.substring(0, 30)}...` : props.title;

    return (
        <div className="anime-cover-container">
              <div className="cover-container">
                    <img width={'133px'} height={'195px'} src={props.image} alt="anime cover" className="anime-cover-img"/>
              </div>
              <div className="anime-cover-title-container">
                    <span className="anime-cover-title">{title(props)}</span> 
              </div>
        </div>
      
    )
}

export default AnimeCover 