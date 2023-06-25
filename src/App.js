import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx"
import Home from "./pages/Home.jsx"
import Aboutme from "./pages/Aboutme.jsx"
import Resume from "./pages/Resume.jsx"
import Projects from "./pages/Projects.jsx"
import Blog from "./pages/Blog.jsx"
import './assets/icofont/icofont.min.css';

const App =() => {
    return(
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutme" element={<Aboutme />}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/blog" element={<Blog/>}/>
  </Routes>
  </BrowserRouter>
    )
};

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
