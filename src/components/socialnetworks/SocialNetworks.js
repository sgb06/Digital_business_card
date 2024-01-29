import React from "react";
import "./SocialNetworks.css";

const SocialNetwork = () => {
  return (
    <div className="SocialNetwork">
      <button
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
            "_black)"
          )
        }
      >
        Email
      </button>
      <button
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/santiago-gallego-24524b299/",
            "_black)"
          )
        }
      >
        linkedin
      </button>
    </div>
  );
};

export default SocialNetwork;
