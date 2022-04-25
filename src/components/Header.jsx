import React from "react";
import style from "../assets/scss/Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = ({ onClick }) => {
  const activeStyle1 = {
    backgroundColor: "red",
    color: "white",
  };

  const activeStyle2 = {
    backgroundColor: "blue",
    color: "white",
  };

  const activeStyle3 = {
    backgroundColor: "green",
    color: "white",
  };
  const activeStyle4 = {
    backgroundColor: "orange",
    color: "white",
  };
  return (
    <header>
      <div className={style.logo}>
        <h1>909</h1>
        <h2>Eunji Baek</h2>
      </div>
      <NavLink
        to="/"
        className={style.menu}
        style={({ isActive }) => (isActive ? activeStyle1 : undefined)}
        onClick={() => {
          onClick(0);
        }}
      >
        ABOUT ME
      </NavLink>
      <NavLink
        to="/skill"
        className={style.menu}
        style={({ isActive }) => (isActive ? activeStyle2 : undefined)}
        onClick={() => {
          onClick(1);
        }}
      >
        SKILL
      </NavLink>
      <NavLink
        to="/project"
        className={style.menu}
        style={({ isActive }) => (isActive ? activeStyle3 : undefined)}
        onClick={() => {
          onClick(2);
        }}
      >
        PROJECT
      </NavLink>
      <NavLink to="/contact" className={style.menu}
         style={({ isActive }) => (isActive ? activeStyle4 : undefined)}
         onClick={() => {
           onClick(3);
         }}>
        CONTACT
      </NavLink>
    </header>
  );
};

export default Header;
