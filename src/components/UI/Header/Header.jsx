import { Link } from "react-router-dom";


import style from './Header.module.scss';


const Header = () => {
  return (
    <header className={style.header}>
     <div className={`container ${style.header__container}`}>
      <div className={style.header__nav}>
        <Link to="#section-2">About me</Link>
        <Link to={"/"}>My projects</Link>
        <Link to={"/"}>Contact</Link>
      </div>
     </div>
    </header>
  );
};
export default Header;
