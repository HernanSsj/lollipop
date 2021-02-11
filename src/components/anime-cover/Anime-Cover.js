import './Anime-Cover-Style.css'

const AnimeCover = (props) =>{

    return (
        <div className="anime-cover-container">
              <div className="cover-container">
                    <img width={'133px'} height={'195px'} src={`data:image/png;base64, ${props.image}`} alt="anime cover" className="anime-cover-img"/>
              </div>
              <div className="anime-cover-title-container">
                    <span className="anime-cover-title">{props.title}</span> 
              </div>
        </div>
      
    )
}

export default AnimeCover 