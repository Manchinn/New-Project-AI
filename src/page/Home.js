import React from 'react'
import Navbar from '../Nav/Navbar';
import './css/Home.css'
import BG from '../Asset/BG.jpg';

function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="home-text">
          Start trading with us
        </h1>
      </div>
    </div>
  )
}

export default Home