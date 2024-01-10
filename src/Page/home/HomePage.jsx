import React from 'react'

import Companies from '../../components/Companies/Companies'
import Residencies from '../../components/Residencies/Residencies'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <>
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
    </>
  )
}

export default Home
