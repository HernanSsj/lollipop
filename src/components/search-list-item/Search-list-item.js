import './Search-list-item-style.css'

const SearchListItem = (props) =>{
    return(
        <>
        <li key={props.index} className="list-item">
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