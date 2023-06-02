
import "./AboutMe.scss";
import HTML from "/src/components/icons/html.svg";
import CSS from "/src/components/icons/css.svg";
import JS from "/src/components/icons/js.svg";
import Sass from "/src/components/icons/sass.svg";
import React from "/src/components/icons/react.svg";
import DownloadButton from './CV/CV';

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="container">
        
        <div className="aboutMe__text">
          Hello everyone, my name is Dmytro <br />
          I am 19 years old <br />
           I am a novice Front-end Developer  <br />
           I'm learning HTML, CSS, Sass, JS and React
        </div>
        <div className="img__container">
          <img src={HTML} alt="" className="orbit-image" />
          <img src={CSS} alt="" className="orbit-image" />
          <img src={JS} alt="" className="orbit-image" />
          <img src={React} alt="" className="orbit-image" />
          <img src={Sass} alt="" className="orbit-image" />
        </div>
        
      </div>
      <DownloadButton />
    </div>
  );
};
export default AboutMe;

