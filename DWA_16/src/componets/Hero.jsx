import React from "react";

import image22 from '../assets/image22.png'
import image23 from '../assets/image23.png'
import image24 from '../assets/image24.png'
import image25 from '../assets/image25.png'
import image26 from '../assets/image26.png'
import image27 from '../assets/image27.png'
import image28 from '../assets/image28.png'
import image29 from '../assets/image29.png'
import image30 from '../assets/image30.png'

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero--columnn hero--columnn-1">
          <img src={image28} alt="" />
        </div>
        <div className="hero--columnn hero--columnn-2">
          <img src={image30} alt="" />
          <img src={image26} alt="" />
        </div>
        <div className="hero--columnn hero--columnn-3">
          <img src={image27} alt="" />
          <img src={image29} alt="" />
        </div>
        <div className="hero--columnn hero--columnn-4">
          <img src={image22} alt="" />
          <img src={image23} alt="" />
        </div>
        <div className="hero--columnn hero--columnn-5">
          <img src={image25} alt="" />
          <img src={image24} alt="" />
        </div>
      </div>

      <section className="tagline">
        <h1 className="tagline--title">Online Experiences</h1>
        <p className="tagline--text">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </section>

    </div>

  )
}

export default Hero;