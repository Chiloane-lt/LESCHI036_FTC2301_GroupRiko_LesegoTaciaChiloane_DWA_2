import React, {useState} from "react";

import Data from '../memesData';

export default function Content() {

//   const [ meme, setMeme ] = useState(getMeme());

//   function getMeme() {
//     const randomIndex = Math.floor(Math.random()*100);
//     const newmeme = Data.data.memes[randomIndex];
//     const { url } = newmeme;
//     return url;
// }

const [ meme, setMeme ] = useState({
  image: 'https://i.imgflip.com/3oevdk.jpg',
  topText: '',
  bottomText: '',
})

function changeHandler(event) {
  const { name, value } = event.target;
  setMeme(prevState => {
    return {
      ...meme,
      [name]: value,
    }
  })
}

function getMeme() {
  const randomIndex = Math.floor(Math.random()*100);
  const newmeme = Data.data.memes[randomIndex];
  const { url } = newmeme;
  return url;
}

function clickHandler() {
  const newImage = getMeme();
  console.log(meme.image)
  setMeme(prevState => {
    return {
      ...meme,
      image: newImage,
    }
  });
}

  return (
    <div className="ContentGenerator">
      <div className="generator">
        <input type="text"
        name="topText"
        onChange={changeHandler}
        value={meme.topText}
        placeholder="Top text"
        className="generator--input input-top"
        />
        
        <input type="text"
        name="bottomText"
        onChange={changeHandler}
        value={meme.bottomText}
        placeholder="Bottom text"
        className="generator--input input--bottom"
        />
        
        <button className="generator--button" onClick={clickHandler}>
          Get New Meme Image
          <span> <i className="fa-sharp fa-solid fa-image"></i></span>
        </button>
      </div>
      <div className="meme-container">
        <img src={meme.image} className="meme-container-image"/>
        <h1 className="meme-container-text text--top">{meme.topText}</h1>
        <h1 className="meme-container-text text--bottom">{meme.bottomText}</h1>
      </div>
    </div>
  )
}