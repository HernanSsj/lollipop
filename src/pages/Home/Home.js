import './Home-Styles.css';
import {useHistory} from 'react-router-dom'
const Home = ()=>{
    let history = useHistory()
    const goToLogin = () => history.push('/login')

    return(
        <div className="home-container">
            <div className="about-section">
                <div className="description">
                    <span className="description-span">Ver anime nunca fue tan simple</span>
                    <h2>Con Lollipop! puedes ver tus animes y peliculas favoritas, de una manera facil y rapida</h2>
                    <button onClick={goToLogin}>Comenzar!</button>
                </div>
                   <div className="image-container">
                     <img  width={"400px"} src="https://i.imgur.com/GOweneZ.png"></img>
                   </div>
                
            </div>
        </div>
        
    )
}

export default Home