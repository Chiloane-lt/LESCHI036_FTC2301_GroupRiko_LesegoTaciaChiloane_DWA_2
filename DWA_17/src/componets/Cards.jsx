/**
 * Rather than add the code to create each card on `App.js`, it's
 * better to separte it and export only what is necessary (i.e.
 * abstract unneccessary information).
 * 
 * Code has been separated into a function to create a single card
 * then another that iterates through `data.js` and creates the cards
 * and exports a carousel of cards. All card code is here so it can
 * be changed without touching `App.jsx`
 */

import React from 'react';

import star from '../assets/star.png';
import data from '../data.js';


/**
 * Creates a card element using the information contained in `data.js`
 * 
 * @param {object} props with object containing card information
 * @returns jsx card element
 */
function Card(props){

  const  {title, price, coverImg, stats: {rating}, stats: {reviewCount}, location, openSpots} = props.item;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div> }
      
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
}


/**
 * Creates an array of jsx elements which will be converted into a
 * carousel showing the available experiences as cards. Creates individual
 * cards using `<Card />`
 * 
 * @returns {import('react').JSXElementConstructor} A jsx element with experience cards.
 */
export default function CardCarousel() {

  const experiences = data.map((experience) => {
    return (
        <Card 
          key={experience.id}
          item={experience}
        />
    )
  })

  return (
    <section className='experiences'>
      {experiences}
    </section>);
}