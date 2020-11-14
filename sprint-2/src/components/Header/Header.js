import { Component } from "react";
import logo from "../../assets/Logo/Logo-brainflix.svg";
import search from "../../assets/Icons/SVG/Icon-search.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__left">
          <Link to="/"><img src={logo} className="header__logo" alt="logo" /></Link>
        </div>
        <div className="header__middle">
          <div className="header__search-wrapper">
            <img src={search} className="header__search-icon" alt="search icon" />
            <input className="header__search" placeholder="Search" />
            
          </div>
        </div>
        <div className="header__right">
          <Link to="/upload" className="header__button">
            + UPLOAD
          </Link>
          <img src={profilePic} className="profile__pic" alt="profilePicture" />
        </div>
      </header>
    );
  }
}

export default Header;