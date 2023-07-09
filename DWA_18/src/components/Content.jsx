import React, {useState, useEffect} from "react";

export default function Content() {

const [ meme, setMeme ] = useState({
  image: 'http://i.imgflip.com/1bij.jpg',
  topText: '',
  bottomText: '',
});

const [allMemes, setAllMemes] = React.useState();

useEffect(() => {
  fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
}, [])

function changeHandler(event) {
  const { name, value } = event.target;
  setMeme(prevState => {
    return {
      ...prevState,
      [name]: value,
    }
  })
}

function getMeme() {
  const randomIndex = Math.floor(Math.random()*100);
  const newmeme = allMemes[randomIndex];
  const { url } = newmeme;
  return url;
}

function clickHandler() {
  const newImage = getMeme();
  setMeme(prevState => {
    return {
      ...prevState,
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