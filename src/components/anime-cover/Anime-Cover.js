import './Anime-Cover-Style.css'
import { useDispatch } from 'react-redux';
import {toggleShow, setDescription, fetchDescription} from '../../actions/description'
const AnimeCover = (props) =>{
      const {poster:image, title, synopsis, status, type,rating,genres} = props.info
     
      const cutTitle = (title) => title.length > 30 ? `${title.substring(0, 30)}...` : title;

      const dispatch = useDispatch()
      //Synopsis only comes with latest anime list it can be used to condition desc fetching
      const setDescriptionState = () =>{
            if(synopsis){
                  dispatch(setDescription(props.info))
                  dispatch(toggleShow())
            }else{
                  dispatch(fetchDescription(title))
                  dispatch(toggleShow())
            }
            }
           
    return (
        <div className="anime-cover-container">
              <div className="cover-container" onClick={()=>setDescriptionState()}>
                    <img width={'133px'} height={'195px'} src={image.length>150 ? `data:image/png;base64,${image}` : image} alt="anime cover" className="anime-cover-img"/>
              </div>
              <div className="anime-cover-title-container">
                    <span className="anime-cover-title">{cutTitle(title)}</span> 
              </div> 
             
        </div>
      
    )
}

export default AnimeCover 