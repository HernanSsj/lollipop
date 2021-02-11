import './Carrousel-Style.css'
import React, {useEffect, useCallback, useLayoutEffect, useState} from "react"
import Carousel from 'react-elastic-carousel'
import AnimeCover from '../anime-cover/Anime-Cover'
import axios from 'axios'




const ItemsCarousel = (props) => {

  console.log(props.episodes.episodes[7])
  const render =props.episodes.episodes.map((episode)=> <AnimeCover title={episode.title} image={episode.image}/>)
  return <Carousel itemsToShow={5}
  pagination={false}
  
  >
         
          {render}
         
         </Carousel>
  
 
}
      

export default ItemsCarousel