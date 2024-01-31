import React from "react";
import "./SocialNetworks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SocialNetwork = () => {
  return (
    <div className="SocialNetworks">
      <button
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
            "_black)"
          )
        }
        className="Button"
      >
        <FontAwesomeIcon icon={faGoogle} /> Email
      </button>
      <button
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/santiago-gallego-24524b299/",
            "_black)"
          )
        }
        className="Button-primary Button"
      >
        <FontAwesomeIcon icon={faLinkedin} /> linkedin
      </button>
    </div>
  );
};

export default SocialNetwork;
