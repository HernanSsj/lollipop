import './Favorites-Styles.css'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/navbar2/navbar'
import Description from '../../components/AnimeDescription/Description'
import AnimeCover from '../../components/anime-cover/Anime-Cover'
import { useEffect } from 'react'
const Favorites = () => {
    const descriptionState = useSelector((state)=>state.description)
    const {show}= descriptionState
    const favorites = useSelector((state)=>state.favorites)
    const render = favorites.map((favorite, index)=> <AnimeCover key={index} info={favorite}/>)
    return (
        <div className="favorites-container">
              <Navbar/>
              <div className="favorites-list">
                  {/* <h1 className="favorites-title">Tus Favoritos:</h1> */}
                {render}
              </div>
          
            {show ? <Description state={descriptionState}/> : null}
        </div>
    )
}

export default Favorites