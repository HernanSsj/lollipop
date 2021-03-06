import { useDispatch } from 'react-redux'
import './Search-list-item-style.css'
import {fetchDescription, toggleShow} from '../../actions/description'
const SearchListItem = (props) =>{
    
    
    const {image, title, type} = props.info

    const dispatch = useDispatch()
    const showDescription = (title) =>{
        console.log("tried to show desc")
        dispatch(fetchDescription(title))
        dispatch(toggleShow())
    }
    return(
        <>
        <li key={props.index} className="list-item" onClick={()=>showDescription(title)}>
            <div className="list-img-container">
                <img  className="li-img" src={image} alt="list item anime cover"></img>
            </div>
          <div className="li-desc">
              <span className="li-title">{title}</span> 
              <span className="li-type">{type}</span> 
          </div> 
       </li>
        </>
    )
  
}

export default SearchListItem