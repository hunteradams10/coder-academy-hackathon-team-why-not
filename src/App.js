import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmojiSearch from "./components/EmojiSeach";
import HireUs from "./components/HireUs";
import NotFound from "./components/NotFound";
import SearchBar from "./SearchBar";

function App() {

  return (
    <div>
        <Router>
          <nav>
            <ul>
              <li><Link to='/'>EmojiSearch</Link></li>
              <li><Link to='/HireUs'>Hire Us</Link></li>
            </ul>
          </nav>
        <Routes>  
          <Route exact path='/' element={<EmojiSearch />} />
          <Route path='/hireUs' element={<HireUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>    
      </Router>

      <SearchBar />
    </div>
  );
}

export default App;
