import { useDispatch } from 'react-redux'
import './Search-list-item-style.css'
import {fetchDescription, toggleShow} from '../../actions/description'
const SearchListItem = (props) =>{

    const dispatch = useDispatch()
    const showDescription = (title) =>{
        console.log("tried to show desc")
        dispatch(fetchDescription(title))
        dispatch(toggleShow())
    }
    return(
        <>
        <li key={props.index} className="list-item" onClick={()=>showDescription(props.title)}>
            <div className="list-img-container">
                <img  className="li-img" src={props.image} alt="list item anime cover"></img>
            </div>
          <div className="li-desc">
              <span className="li-title">{props.title}</span> 
              <span className="li-type">{props.type}</span> 
          </div> 
       </li>
        </>
    )
  
}

export default SearchListItem