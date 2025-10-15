import React from "react";
import aboutImg from "../assets/about-Img.jpg"; // make sure filename matches exactly!
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About <span>Power House</span></h2>
          <p>
            At <b>Power House</b>, we believe fitness is not just about lifting weights — 
            it’s about building strength, confidence, and a lifestyle. 
            Our platform helps you explore exercises, discover workout routines, 
            and stay motivated on your journey to becoming the best version of yourself.
          </p>
          <p>
            Whether you’re a beginner or a pro athlete, Power House is your 
            ultimate companion for workouts, health, and transformation.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="About Power House" />
        </div>
      </div>
    </section>
  );
};

export default About;
