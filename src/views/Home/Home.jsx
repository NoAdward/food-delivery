import "./Home.scss";
import Me from "/src/assets/me.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__photo">
          <img src={Me} alt="" />
        </div>
        <div className="title"> Dmyrto Tomchuk</div>
      </div>
    </div>
  );
};
export default Home;
