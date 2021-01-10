import React, {useState, useEffect, useCallback} from "react"
import './navbar-style.css';


const Navbar = ()=>{
     
   
    return(
        <section className="navbar">
            <ul className="nav-list">
                <li className="list-item"><a href="#">Login</a></li>
                <li className="list-item"><a href="#">Register</a></li>
                <li className="list-item"><a href="#">About</a></li>
            </ul>
        </section>
        
           
    )
}

export default Navbar