import React, {useState, useEffect, useCallback} from "react"
import './Home-Styles.css';
import {useHistory} from 'react-router-dom'
const Home = ()=>{
    let history = useHistory()
    const goToLogin = () => history.push('/login')

    return(
        <div className="home-container">
            <div className="about-section">
                <div className="description">
                    <span>Anime was never that simple</span>
                    <h2>With Lollipop! you can watch your favorite anime episodes and movies in a easy way.</h2>
                    <button onClick={goToLogin}>Get Started!</button>
                </div>
                   <div className="image-container">
                     <img  width={"400px"} src="https://i.imgur.com/GOweneZ.png"></img>
                   </div>
                
            </div>
        </div>
        
    )
}

export default Home