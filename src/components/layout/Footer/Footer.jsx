import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className='innerFooter'>
            <p>+917088761823</p>
            <p>Sartajahmad321315@gmail.com</p>
                <p><a href="ttps://www.linkedin.com/in/sartaj-saifi-229699127/"><FaLinkedin /></a><a href="https://github.com/sartajahmad32" ><VscGithub /></a></p>
        </div>
    </div>
    </>
  )
}

export default Footer
