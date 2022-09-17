import React, { useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { classReducer } from "../../redux/Reducers/openClassSidebar";
import { useDispatch } from "react-redux";

export default function Header() {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (active) {
      dispatch(classReducer("opened"));
      setActive(false);
    } else {
      dispatch(classReducer(""));
      setActive(true);
    }
  };
  return (
    <>
      <div className="header">
        <div className="header-entrance">
          <button
            onClick={handleClick}
            className="header-entrance__btn"
            type="button"
          >
            <i className="header-entrance__icon bx bx-menu-alt-left"></i>
          </button>
          <h1 className="header-entrance__logo">Hujjatlar</h1>
        </div>
        <div className="header-container">
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
