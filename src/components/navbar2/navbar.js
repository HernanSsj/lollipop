import React, {useState, useEffect, useCallback} from "react"
import './navbar2-style.css';
import axios from 'axios'
import {Link } from "react-router-dom";
import {searchIcon, userIcon} from '../../utils/icons'
import Search from '../search/Search'
import { useDispatch } from "react-redux";
import {deleteUser} from '../../actions/users'
const Navbar = ()=>{
    // useEffect(()=>{
    //     console.log(searchKey)
    // })
    const dispatch = useDispatch()
    const logout = () => {
       
        axios.get('http://localhost:5000/auth/logout', {withCredentials: true}).then(()=>{
            
            dispatch(deleteUser())
    
            // history.push("/")
        })
        .catch(()=>dispatch(deleteUser()))
       }
    return(
             <nav className="navbar2">
                <div className="left">
                <div className="logo-container"></div>
                <div className={"navbar-links2" }>
                    <ul>
                        <li><Link to="/"><button >Inicio</button></Link></li>
                        <li><Link to="/favorites"><button >Favoritos</button></Link></li>
                    </ul>

                </div>
                </div>
                <div className="rigth">
                <Search/>
              
                    {/* <button 
                     onClick={() => setSearching(!searching)}
                     onMouseLeave={() => setSearching(!searching)}
                    // className={"search-button"}>{searchIcon}</button>
               */}
               
               
                    <button onClick={logout} className="profile-button">{userIcon}</button>
                </div>
               
                </nav>
    )
}

export default Navbar