import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import About from "./Pages/About";
import Tools from "./Pages/Tools";
import Home from "./Pages/Home";
import './App.css';
function App() {
    const arr = [1,2,3,4]

  return (
      <>
      <header>
          <div>btn</div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/tools">Tools</Link>

          <Link to="/tools">Add Receipt</Link>
      </header>
          <Routes>
              <Route path="/" element={<Home arr={arr}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/tools" element={<Tools/>}/>

          </Routes>
          </>
  );
}

export default App;
