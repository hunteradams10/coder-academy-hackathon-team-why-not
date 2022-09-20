import React from 'react'
import '../App.css'
import SearchBar from './SearchBar'

function EmojiSearch() {
  return (
    <div className="heading">
      <h1>Searching for just the right emoji? Type a word and <span className="emojiword">EmojiSearch</span> will do the rest.</h1>
      <SearchBar />
    </div>  
  )  
}

export default EmojiSearch;
