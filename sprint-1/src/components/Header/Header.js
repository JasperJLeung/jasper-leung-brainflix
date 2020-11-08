import { Component } from "react";
import logo from "../../assets/Logo/Logo-brainflix.svg";
import search from '../../assets/Icons/SVG/Icon-search.svg';
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__left">
          <img src={logo} className="header__logo" alt="logo" />
        </div>
        <div className="header__middle">
          <div className="header__search-wrapper">
            <img src={search} className="header__search-icon" alt="search icon" />
            <input className="header__search" placeholder="Search" />
            
          </div>
        </div>
        <div className="header__right">
          <button type="button" className="header__button">
            + UPLOAD
          </button>
          <img src={profilePic} className="profile__pic" alt="profilePicture" />
        </div>
      </header>
    );
  }
}

export default Header;
