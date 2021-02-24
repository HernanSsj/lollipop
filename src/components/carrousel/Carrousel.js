import './Carrousel-Style.css'
import React, {useEffect, useCallback, useLayoutEffect, useState} from "react"
import Carousel from 'react-elastic-carousel'
import AnimeCover from '../anime-cover/Anime-Cover'
import NewEpisodeCover from '../new-episode-cover/New-Episode-Cover'
import axios from 'axios'




const ItemsCarousel = (props) => {
       const breakPoints = [
              { width: 1, itemsToShow: 1 },
              { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
              { width: 850, itemsToShow: 3 },
              { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
              { width: 1450, itemsToShow: 8,itemsToScroll: 5 },
              { width: 1750, itemsToShow: 6 },
            ]
          
  console.log(props.episodes.episodes[7])
  const newEp =props.episodes.episodes.map((episode, index)=> <NewEpisodeCover key={index} title={episode.title} image={episode.poster} episode={episode.episode} id={episode.id} servers={episode.servers}/>)
  const top =props.episodes.episodes.map((episode, index)=> <AnimeCover key={index} title={episode.title} image={"https://cdn.myanimelist.net/images/anime/1000/110531.jpg?s=3df5ebb6800604dc04c6a6187dd7161b"}/>)
  return <>
              <h2 style={{color:"white"}}>Ultimos episodios</h2>
              <Carousel 
              itemsToShow={6}
              itemsToScroll={5}
              pagination={false}
              
              >
         
          {newEp}
        
         </Carousel>
         <h2 style={{color:"white"}}>Top 10</h2>
              <Carousel itemsToShow={5}
              breakPoints={breakPoints}
              itemPadding={[10,10]}
       pagination={false}
       
       >
         
        
         {top}
         </Carousel>
         </>
  
  
 
}
      

export default ItemsCarousel