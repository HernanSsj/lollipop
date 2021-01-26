import React, {useState, useEffect, useCallback} from "react"
import './home-styles.css';
const Home = ()=>{
    return(
        <div className="home-container">
            <div className="about">
                <div className="description">
                    <span>Play Aniwhere Anytime</span>
                    <h2>With Lollipop! you can watch your favorite anime episodes and movies whenever your want.</h2>
                    <button>Get Started!</button>
                </div>
                   <div className="image-container">
                     <img src="https://i.imgur.com/GOweneZ.png"></img>
                   </div>
                
            </div>
        </div>
        
    )
}

export default Home