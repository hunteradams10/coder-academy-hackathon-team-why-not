import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
     <nav className='nav'>
        <Link className="emojiSearch" id='siteTitle' to='/'>EmojiSearch</Link><br></br>
        <Link id='hireUsButton' to='/HireUs'>
            <button className="button">Hire Us! 👾</button>
        </Link>
     </nav>
    )
  }

export default NavBar;
