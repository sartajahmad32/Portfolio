// import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";
// import './Navbar.css'
// import { Link } from 'react-router-dom';

// const Navbar = () => {

//   // TO open resume
//   const openResume=()=>{
//     window.open("https://drive.google.com/file/d/1AYIpoNLalpry2OMLTvXEZHJYWHhqyGht/view?usp=sharing","_blank");
//   }

//   // TO download Resume
//   const downloadResume=()=>{
//     const link = document.createElement("a");
//     link.href =
//       "https://drive.google.com/uc?export=download&id=1AYIpoNLalpry2OMLTvXEZHJYWHhqyGht";
//     link.download = "Sartaj saifi.pdf";
//     link.click();
//   }

//   return (
//     <>
//        <div className="navbar">
//         <h3 className="ml-10">Portfollio</h3>
//         <ul>
//           <li><Link to="/">Home</Link> </li>
//           <li> <Link to="/projects">Projects</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><button onClick={openResume}>Open CV</button></li>
//           <li><button onClick={downloadResume}>Download CV</button></li>
//           <li><a href="https://wa.me/+917088761823" target='_blank'><img src="Icons/whatsapp.svg" alt="" /></a></li>
//           <li><a href="https://www.linkedin.com/in/sartaj-saifi-229699127/"><FaLinkedin /></a></li>
//           <li><a href="https://github.com/sartajahmad32"><VscGithub /></a></li>
//         </ul>
//        </div>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaToggleOff } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1AYIpoNLalpry2OMLTvXEZHJYWHhqyGht/view?usp=sharing', '_blank');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1AYIpoNLalpry2OMLTvXEZHJYWHhqyGht';
    link.download = 'Sartaj saifi.pdf';
    link.click();
  };

  return (
    <>
      <div className="navbar">
        <h3 className="ml-10">Portfolio</h3>
        <button className="toggle-btn" onClick={toggleNav}>
        <FaToggleOff className="mr-8 w-10 h-10"/>
        </button>
        <ul className={showNav ? 'show' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><button onClick={openResume}>Open CV</button></li>
          <li><button onClick={downloadResume}>Download CV</button></li>
          <li><a className='whatsapp' href="https://wa.me/+917088761823" target='_blank'><img src="Icons/whatsapp.svg" alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/sartaj-saifi-229699127/"><FaLinkedin /></a></li>
          <li><a href="https://github.com/sartajahmad32"><VscGithub /></a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;



