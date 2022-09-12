import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-entrance">
          <button className="header-entrance__btn">
            <i className="header-entrance__icon bx bx-menu-alt-left"></i>
          </button>
          <h1 className="header-entrance__logo">LOGO</h1>
        </div>
        <div className="header-main">
          <ul className="header-main__list">
            <li className="header-main__item">
              <NavLink className="header-main__link" to="/">
                <i className="header-main__icon bx bx-bell" />
              </NavLink>
            </li>
            <li className="header-main__item">
              <NavLink className="header-main__link" to="/">
                <i className="header-main__icon bx bx-chat" />
              </NavLink>
            </li>
            <li className="header-main__item">
              <NavLink className="header-main__link" to="/">
                <i className="header-main__icon bx bx-log-out"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
