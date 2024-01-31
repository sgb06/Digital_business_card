import React from "react";
import "./AboutMe.css";

const AboutMe = ({ title, description }) => {
  return (
    <div className="AboutMe">
      <h1 className="AboutMe_title">{title}</h1>
      <p className="AboutMe_description">{description}</p>
    </div>
  );
};

export default AboutMe;
