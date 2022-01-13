import React from "react";
import { Link } from "react-router-dom";

const HeaderSubNav = ({ subNav }) => {
   
  return subNav && subNav.subLinks.length > 0 ? (
    <div className="header__nav__subNav">
      <div className="header__nav__subNav__image">
        <img src={`${subNav.image}`} alt="random"></img>
      </div>
      <div className="header__nav__subNav__links">
        <>
          {subNav.subLinks.map((link, i) => {
            return (<Link to={`${link.url}`} key={`subNav${i}`}>{link.subTitle}</Link>);
          })}
        </>
      </div>
    </div>
  ) : null;
};

export default HeaderSubNav;