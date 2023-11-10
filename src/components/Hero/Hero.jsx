import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="bio">
          <h1>
            Hey 👋,<br />
            My name is <br />
            <span>Sartaj Saifi (Saifi)</span> <br />I Build things for web
          </h1>
        </div>
        <div className="rightImage">
          <img className="image" src="images/SaifiProfile.jpg" alt="" />
        </div>
      </div>
      
    </>
  );
};

export default Hero;
