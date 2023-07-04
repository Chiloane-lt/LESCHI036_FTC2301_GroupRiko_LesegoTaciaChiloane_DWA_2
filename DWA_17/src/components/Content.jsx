import React from "react";

export default function Content() {
  return (
    <div className="ContentGenerator">
      <div className="generator">
        <input type="text" className="generator--input input-top" />
        <input type="text" className="generator--input input--bottom"/>
        <button className="generator--button">
          Get New Meme Image
          <span> <i class="fa-sharp fa-solid fa-image"></i></span>
        </button>
      </div>
      <div className="meme-container">Meme Image Goes Here!</div>
    </div>
  )
}