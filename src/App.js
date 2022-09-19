import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmojiSearch from './components/EmojiSeach.jsx'
import HireMe from './components/HireMe';
import NotFound from "./components/NotFound"



function App() {
  return (
    <div >
       <Router>
          <nav>
            <ul>
              <li><Link to='/'>Emoji Search</Link></li>
              <li><Link to='/hireMe'>Hire Me</Link></li>
            </ul>
          </nav>
        <Routes>  
        <Route path='*' element={<NotFound />} />
          <Route exact path='/' element={<EmojiSearch />} />
          <Route path='/hireMe' element={<HireMe />} />
        </Routes>    
      </Router>
    </div>
  )
}

export default App;
