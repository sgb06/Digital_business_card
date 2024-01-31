import ProfileImage from "../profileImage/ProfileImage";
import AboutMe from "../aboutme/AboutMe";
import SocialNetworks from "../socialnetworks/SocialNetworks";
import Footer from "../footer/Footer";
import MyInfo from "../myinfo/MyInfo";
import "./Card.css";

const Card = () => {
  return (
    <div className="Card">
      <ProfileImage />
      <MyInfo />
      <SocialNetworks />
      <AboutMe
        title="About"
        description="I am a person willing to learn new things every day, with a good ability to adapt to work environments. I enjoy working in teams and contributing possible solutions."
      />
      <AboutMe
        title="Interest"
        description="Passionate about technological innovation and software development, committed to excellence and creative problem-solving. 
      With experience in designing and implementing robust solutions, I seek challenges that allow me to grow professionally and contribute significantly to innovative projects."
      />
      <Footer />
    </div>
  );
};

export default Card;
