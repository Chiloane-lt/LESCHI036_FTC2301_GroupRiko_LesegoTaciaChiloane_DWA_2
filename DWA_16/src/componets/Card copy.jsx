import React from 'react';
import image12 from '../assets/image12.png';
import star from '../assets/star.png';

export default function Card() {
    return (
        <div className='card'>
          <img src={image12} alt="katie-zaferes" className='card--image'/>
          <div className='rating'>
            <img src={star} alt="" className='rating--star'/>
            <span>5.0 </span>
            <span className='rating--light'>(6)</span>
            <span className='rating--light'>•USA</span>
            </div>
          <p>Life lessons with Katie Zaferes</p>
          <p><span className='amount'>From $136</span> / person</p>
        </div>
    )
};