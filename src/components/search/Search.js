import axios from 'axios'
import { useEffect, useState } from 'react'
import './Search-Style.css'
import SearchListItem from '../search-list-item/Search-list-item'
import {search} from '../../utils/request-caching'
const Search = () =>{
    const [searchState, setSearchState] = useState({
        results: null,
        loading: false,
        value: ""
    })

    useEffect(()=>{
       
        const fetchSearchResults = async (title)=>{
            setSearchState({loading:true})
            const response = await search(`https://protected-reaches-41658.herokuapp.com/api/v3/search/${title}`)
           console.log(response)
            setSearchState({results: response, loading:false})
        }
        if(searchState.value){
            fetchSearchResults(searchState.value)
        }
        
    },[searchState.value])
 
  const listItems = searchState.results? searchState.results.slice(0, 6).map((item, index)=> <SearchListItem index={index} info={item}/> ): null
    return(
        <>
        
        <input   
                  value={searchState.value }
                  onChange={(e)=> setSearchState({value:e.target.value})}
                  maxLength={13}
                  spellCheck="false" className={"search-input"}>
        </input> 
       
        <ul className={`${ searchState.value!= "" ? "search-results" : "invisible"}`}  tabindex = "1" onBlur={(e) => {setSearchState({value:""})}}>
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