import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import EmojiSearch from "./components/EmojiSeach";
import HireUs from "./components/HireUs";
import NotFound from "./components/NotFound";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
        <Router>
            <NavBar />
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
