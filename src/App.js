import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Project';
import Skill from './components/Skill';
import Project from './components/Project';

const App = () => {
  return (
    <Router>
    <Navbar/>
       <Routes>
          <Route index path="/" element={<Home/>}/>
          </Routes>
          
          <Routes>
          <Route index path="/about" element={<About/>}/>
          </Routes>

          <Routes>
          <Route index path="/skill" element={<Skill/>}/>
          </Routes>

          <Routes>
          <Route index path="/project" element={<Project/>}/>
          </Routes>

          <Routes>
          <Route index path="/contact" element={<Contact/>}/>
          </Routes>
  </Router>
    
  )
}

export default App