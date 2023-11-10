import React from 'react'
import {Router,Routes,Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import MyTechStack from '../MyTechStack/MyTechStack'
import Skills from '../MyTechStack/Skills'
import ProjectHeading from '../ProjectHeading/ProjectHeading'
import Projects from '../Projects/Projects'
import Footer from '../layout/Footer/Footer'

const Home = () => {
  return (
    <>
        
        <Navbar />
        <Hero />
        <MyTechStack />
        <Skills />
        <ProjectHeading />
        <Projects />
        <Footer />
    </>
  )
}

export default Home
