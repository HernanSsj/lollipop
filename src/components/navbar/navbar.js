import React, {useState, useEffect, useCallback} from "react"
import './navbar-style.css';
import logo from '../../images/logo4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleDown} from "@fortawesome/free-solid-svg-icons";

const Navbar = ()=>{
     
    const [mobile, SetMobile] = useState(false)
    const show = ()=> SetMobile(!mobile)
    const menuIcon = <FontAwesomeIcon icon={faChevronCircleDown} color={"#F9F9F9"} size={"2x"}/>
    return(
             <nav className="navbar">
                <div className="logo-container"></div>
                <button className="toggle-button" onClick={show}>{menuIcon}</button>
                <div className={mobile ? "navbar-links active" : "navbar-links" }>
                    <ul>
                        <li><button className="to" >About</button></li>
                        <li><button className="ton" >Home</button></li>
                        <li><button className="on" >Contact</button></li>
                    </ul>
                </div>
            </nav>          
    )
}

export default Navbar