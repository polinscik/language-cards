import React, {Fragment} from "react";
import {Link, NavLink} from "react-router-dom";
import "./Menu.scss";

export default function Menu() {
  return (
    <Fragment>
      <Link className="logo-link" to={"/"}>
        <img
          className="logo"
          alt="ABC logo"
          src="src/images/alphabet-block.png"
        />
      </Link>
      <h2 className="title">Учи иностранные языки по карточкам</h2>
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to={"/"}
            className={({isActive}) => (isActive ? "active" : "")}>
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/game"}
            className={({isActive}) => (isActive ? "active" : "")}>
            Изучать карточки
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/create"
            className={({isActive}) => (isActive ? "active" : "")}>
            Создать коллекцию
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
}
