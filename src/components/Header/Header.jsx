import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <section className="h-wrapper">
        <div className=" flexCenter paddings innerWidth h-container">
          <Link to="/">
            <img src="./images (1).png" alt="logo" width={60 } />
            </Link>
            <div className="flexCenter h-menu ">
                {/* <a href="">About Us</a> */}
                <button className='button'>
                    <a href="">Contact</a>
                </button>
                
            </div>
        </div>
    </section>
  )
}

export default Header
