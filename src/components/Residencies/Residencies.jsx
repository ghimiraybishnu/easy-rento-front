import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSetting } from '../../utils/common'

import { Link } from "react-router-dom";
import Property from '../../Page/property/PropertyPage'

const Residencies = () => {
  return (
    <section className="r-wrapper">
       <div className="padding innerWidth r-container">
        <div className="r-head flexColstart">
            <span className='orangeText'>Best Choices</span> <br/>
            <span className='primaryText'>Popular Properties</span>
            </div>
            <p>Go to <Link to="/property">Property Page</Link></p>

<Swiper {...sliderSetting}>
    <SliderButton/>
{
   data.map((card, i)=> (
    
    <SwiperSlide key={i}>
        <Link to="/property">
        <div className="flexColStart r-card">
            <img src={card.image} alt="home"/>
            <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>NPR</span>
                 <span>{card.price}</span>
            </span>

            <span className="primaryText">{card.name}</span>
            <span className="secondaryText">{card.detail}</span>
        </div>
        </Link>
    </SwiperSlide>

   )) 
}


</Swiper>


            </div> 
    </section>
  )
}

export default Residencies

const SliderButton = ()=> {
    const swiper = useSwiper(); 
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};
