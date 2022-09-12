import React from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-inner">
          <ul className="sidebar-list">
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/">
                <i className="sidebar-list__icon bx bxs-dashboard"></i>
                <span className="sidebar-list__text">Dashboard</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/about">
                <i className="sidebar-list__icon bx bxs-group"></i>
                <span className="sidebar-list__text">Users</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
