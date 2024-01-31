import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="Footer">
      <a href="https://github.com/sgb06" target="_blank">
        <FontAwesomeIcon icon={faGithub} color="#FBF9F1" />
      </a>
      <a
        href="https://www.linkedin.com/in/santiago-gallego-24524b299/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#FBF9F1" />
      </a>
      <a href="https://www.instagram.com/gallego_0627/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} color="#FBF9F1" />
      </a>
      <a
        href="https://www.facebook.com/santiago.gallego.7568?locale=es_LA"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} color="#FBF9F1" />
      </a>
    </footer>
  );
};

export default Footer;
