import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import About from "./Pages/About";
import Tools from "./Pages/Tools";
import Home from "./Pages/Home";
import './App.css';
function App() {

  return (
      <>
      <header>
          <div>btn</div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/tools">Tools</Link>
      </header>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/tools" element={<Tools/>}/>
          </Routes>
          </>
  );
}

export default App;
