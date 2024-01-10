import React, { useState } from 'react'
import './PropertyPage.css'
 import LoginPage from '../../components/LoginPage/loginpage'

import { Gallery } from "react-grid-gallery";
import Header from '../../components/Header/Header';



const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        tags: [
           { value: "Ocean", title: "Ocean" },
           { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
     },
     {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        width: 320,
        height: 212,
     },
 ];

const Property = () => {
   const [loginVisible, setLoginVisible] = useState(false)
  
  return (
    <>
    <div className="property-info-container">
    <h1 className='property-title'>Sasto Ghar</h1>
    <div className="address-info">
      <span className="address">Kathmandu, Nepal</span>
      <button type="button" onClick={(e) => setLoginVisible(!loginVisible)}>Rent property</button>
      { loginVisible && <LoginPage onClose={loginVisible}/> }
    </div>
      <div className="property-container">
        
        <div className="right-img-main">
            <img src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" alt="House NO 1" />
        </div>
        <div className="left-img-container">
            <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" alt="House NO 1" />
            <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" alt="House NO 2" />
            <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" alt="House NO 3" />
            <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" alt="House NO 4" />
        </div>
        {/* <Gallery images={images} /> */}
      </div>

      {/* description goes here */}
    </div>
   
    </>
  )
}

export default Property
