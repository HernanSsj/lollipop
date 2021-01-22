import React, {useState, useEffect, useCallback} from "react"
import './navbar-style.css';
import logo from '../../images/logo4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleDown} from "@fortawesome/free-solid-svg-icons";
 import {Link } from "react-router-dom";
const Navbar = ()=>{
     
    const [mobile, SetMobile] = useState(false)
    const show = ()=> SetMobile(!mobile)
    const menuIcon = <FontAwesomeIcon icon={faChevronCircleDown} color={"#F9F9F9"} size={"2x"}/>
    return(
             <nav className="navbar">
                <div className="logo-container"></div>
                
                <div className={mobile ? "navbar-links active" : "navbar-links" }>
                    <ul>
                        <li><Link to="/"><button >Home</button></Link></li>
                        <li><Link to="/login"><button >Login</button></Link></li>
                        <li><Link to="/signup"><button >Sign up</button></Link></li>
                    </ul>
                </div>
                <button className="toggle-button" onClick={show}>{menuIcon}</button>
            </nav>          
    )
}

export default Navbar