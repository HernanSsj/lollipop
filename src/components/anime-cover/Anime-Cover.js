import './Anime-Cover-Style.css'
import { useDispatch } from 'react-redux';
import {toggleShow, setDescription} from '../../actions/description'
const AnimeCover = (props) =>{
      const {poster:image, title, synopsis, status, type,rating,genres} = props.info
     
      const cutTitle = (title) => title.length > 30 ? `${title.substring(0, 30)}...` : title;

      const dispatch = useDispatch()
      const setDescriptionState = () =>{
            dispatch(setDescription(props.info))
            dispatch(toggleShow())
      }
    return (
        <div className="anime-cover-container">
              <div className="cover-container" onClick={()=>setDescriptionState()}>
                    <img width={'133px'} height={'195px'} src={`data:image/png;base64,${image}`} alt="anime cover" className="anime-cover-img"/>
              </div>
              <div className="anime-cover-title-container">
                    <span className="anime-cover-title">{cutTitle(title)}</span> 
              </div> 
             
        </div>
      
    )
}

export default AnimeCover 