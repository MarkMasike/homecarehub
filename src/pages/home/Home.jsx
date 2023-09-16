import React from 'react'
import Featured from '../../components/featuted/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import {cards} from "../../data"
import CatCard from '../../components/catCard/CatCard'
const Home = () => {
  return (
   <div className="home">
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
   </div>
  )
}

export default Home