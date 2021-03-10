import axios from 'axios'
import { useEffect} from 'react'
import './Search-Style.css'
import SearchListItem from '../search-list-item/Search-list-item'
import {search} from '../../utils/request-caching'
import { useDispatch, useSelector } from 'react-redux'
import {fillValue, toggleLoading, fillResults} from '../../actions/search'
const Search = () =>{
    const dispatch = useDispatch()
    const searchState = useSelector((state)=>state.search)
    const {value, loading, results} = searchState
    useEffect(()=>{
        const fetchSearchResults = async (title)=>{
           dispatch(toggleLoading())
            const result = await search(`https://protected-reaches-41658.herokuapp.com/api/v3/search/${title}`)

            dispatch(fillResults(result))
            dispatch(toggleLoading())
        }
        if(value!=="")fetchSearchResults(value)
       
    },[value])
 
  const listItems = results? results.slice(0, 6).map((result, index)=> <SearchListItem index={index} info={result}/> ): null
    return(
        <>
        
        <input   
            value={value }
            placeholder={"Buscar.."}
            onChange={(e)=> dispatch(fillValue(e.target.value))}
            maxLength={13}
            spellCheck="false" 
            className={"search-input"}
            onBlur={(e) => {
                    setTimeout(() => dispatch(fillValue("")), 500)
                    }
                  }
        >
                
        </input> 
 
         <ul className={`${ value!= "" ? "search-results" : "invisible"}`} >
         <li className="top"></li>
            {
                searchState.loading? <li className="search-loading">Cargando..</li> :listItems
            }
            {
            !searchState.loading ? searchState.results === undefined? <li className="search-not-found">No se encontraron resultados</li> : null : null
            }
        <button className="see-more-button">Ver mas</button>
        
        </ul> 
        </>
    )
}

export default Search