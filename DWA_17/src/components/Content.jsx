import React, {useState} from "react";

import Data from '../memesData';

export default function Content() {

  const [ meme, setMeme ] = useState(getMeme());

  function getMeme() {
    const randomIndex = Math.floor(Math.random()*100);
    const newmeme = Data.data.memes[randomIndex];
    const { url } = newmeme;
    return url;
}

  function clickHandler() {
    setMeme(getMeme());
  }

  return (
    <div className="ContentGenerator">
      <div className="generator">
        <input type="text" className="generator--input input-top" />
        <input type="text" className="generator--input input--bottom"/>
        <button className="generator--button" onClick={clickHandler}>
          Get New Meme Image
          <span> <i className="fa-sharp fa-solid fa-image"></i></span>
        </button>
      </div>
      <div className="meme-container">
        <img src={meme} className="meme-container-image"/>
        <h1 className="meme-container-text text--top">Top Text</h1>
        <h1 className="meme-container-text text--bottom">Bottom Text</h1>
      </div>
    </div>
  )
}