import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div>
          <h1 className="text-5xl mt-16">About Me</h1>
          <p className="text-sm mt-8">
            I'm Sartaj Saifi, a budding front-end developer, eager to bring web
            designs to life. Proficient in <b> HTML, CSS, and JavaScript,React.js,Bootstrap,Java,Material Ui</b> I'm ready
            to create user-friendly web experiences and learn from the best in
            the field. Let's connect and build something amazing together!
          </p>
        </div>
        <div>
          <h1 className="text-5xl mt-16">Work Experience</h1>
          <p className="text-sm mt-8">
            I have Three Mongths experiences as a front end developer in Dadhich Technology pvt Ltd <br />June-2023 to Aug-2023
          </p>
        </div>
        <div>
          <h1 className="text-4xl mt-16">Education</h1>
          <p className="text-xl mt-8">
            Bachelor Of Computer Application
          </p>
          <div className="education mt-2">
            <p>Khandelwal College Management Science and Technology</p>
            <p>Aug-2018 to Oct 2021</p>
          </div>
          <p className=" text-xl mt-8">
            Master Of Computer Application
          </p>
          <div className="education mt-3">
            <p>Khandelwal College Management Science and Technology</p>
            <p>Pursuing</p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;
