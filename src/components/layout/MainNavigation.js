import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/">Quotes Diary</Link>
      </div>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={style.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={style.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
