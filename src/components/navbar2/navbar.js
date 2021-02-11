import React, {useState, useEffect, useCallback} from "react"
import './navbar2-style.css';

import {Link } from "react-router-dom";
import {searchIcon, userIcon} from '../../utils/icons'
const Navbar = ()=>{
     const [searching, setSearching] = useState(false)
     const [searchKey, setSearchKey] = useState("")
    // useEffect(()=>{
    //     console.log(searchKey)
    // })
    return(
             <nav className="navbar2">
                <div className="left">
                <div className="logo-container"></div>
                <div className={"navbar-links2" }>
                    <ul>
                        <li><Link to="/"><button >Home</button></Link></li>
                        <li><Link to="/login"><button >Favorites</button></Link></li>
                        <li><Link to="/login"><button >Categories</button></Link></li>
                        <li><Link to="/login"><button >Movies</button></Link></li>
                        
                       
                    </ul>

                </div>
                </div>
                <div className="rigth">
               
                    <input   onBlur={(e) => {setSearchKey("")}}
                    value={searchKey}
                   onChange={(e)=> setSearchKey(e.target.value)}
                   maxLength={13}
                 spellCheck="false" className={"search-input"}></input> 
                    {/* <button 
                     onClick={() => setSearching(!searching)}
                     onMouseLeave={() => setSearching(!searching)}
                    // className={"search-button"}>{searchIcon}</button>
               */}
               
               
                    <button className="profile-button">{userIcon}</button>
                </div>
               
                </nav>
    )
}

export default Navbar