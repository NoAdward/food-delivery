import { Link } from "react-router-dom";
import BoxIcon from "../../icons/BoxIcon";

import profileImage from '/src/assets/profile.png'
import logo from '/src/assets/logo.svg'
import Input from "../input/input"

import style from './Header.module.scss';


const Header = () => {
  return (
    <header className={style.header}>
     <div className={`container ${style.header__container}`}>
     <div className={style.header__logo}><img src={logo} alt="logo" /></div>
      <div className={style.header__search}>
        <Input />
      </div>
      <div className={style.header__nav}>
        <Link to={"/"}>Restaurants</Link>
        <Link to={"/"}>Deals</Link>
        <Link to={"/"}>My orders</Link>
        
      </div>
      <div className={style.header__btn}>
        <div className={style.headerBusket}>
            <BoxIcon />
            <div className={style.headerBusket__counter}><span>4</span></div>
        </div>
        <div className={style.headerProfile}>
        <Link to={"/profile"}><img src={profileImage} alt="profile" /></Link>
            
        </div>
      </div>
     </div>
    </header>
  );
};
export default Header;
