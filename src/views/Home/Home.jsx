import "./Home.scss";
import Me from "/src/assets/me.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__photo">
          <img src={Me} alt="" />
        </div>
        <div className="title">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 200,
              strings: ["Dmyrto Tomchuk"],
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
