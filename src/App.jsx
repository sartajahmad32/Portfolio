import { useState } from 'react';
import Home from './components/Home/Home';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProjectPage from './components/layout/ProjectPage/ProjectPage';
import Navbar from './components/Navbar/Navbar';
import About from './components/about/about';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
