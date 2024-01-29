import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      kjhkjhjk
      <a href="https://github.com/santigallego2706" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/santiago-gallego-92777b171/"
        target="_blank">
            <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a href="https://www.instagram.com/santigallego2706/" target="_blank">
        <FontAwesomeIcon icon={faInstagram}/>
      </a>
      <a href="https://www.facebook.com/santigallego2706" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </footer>
  );
};

export default Footer;
