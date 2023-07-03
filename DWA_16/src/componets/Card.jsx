import React from 'react';

import star from '../assets/star.png';
import data from '../data.js';

/**
 * Justification for not doing it the SCRIMBA way.
 * 1. Involves changes the code on the App file if any changes are made to
 *    the card. My way isolates changes to cards to the Cards.jsx file.
 * 2. Ensure App.jsx is more readeable.
 * 3. Does not require the use of props. Instead, will "watch" data.js
 *    automatically for changes to card information.
 */

export default function Card() {

  const experiences = data.map((experience) => {
    const  {title, price, coverImg, stats: {rating}, stats: {reviewCount}, location} = experience;

    return (
      <div className='card'>
      <img src={coverImg} className='card--image'/>
      <div className='rating'>
        <img src={star} alt="" className='rating--star'/>
        <span>{rating} </span>
        <span className='rating--light'>({reviewCount})</span>
        <span className='rating--light'>•{location}</span>
        </div>
      <p>{title}</p>
      <p><span className='amount'>From ${price}</span> / person</p>
    </div>
    )
  })
  
    return (
      <section>
        {experiences}
      </section>
    )
}