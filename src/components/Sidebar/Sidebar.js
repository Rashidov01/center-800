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
              <NavLink className="sidebar-list__link" to="/users">
                <i className="sidebar-list__icon bx bxs-group"></i>
                <span className="sidebar-list__text">Users</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/documents">
                <i class="sidebar-list__icon bx bxs-file-doc"></i>
                <span className="sidebar-list__text">Documents</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/archive">
                <i class="sidebar-list__icon bx bxs-file-archive"></i>
                <span className="sidebar-list__text">Archive</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/info">
                <i class="sidebar-list__icon bx bx-info-circle"></i>
                <span className="sidebar-list__text">Info</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/command">
                <i class="sidebar-list__icon bx bx-command"></i>
                <span className="sidebar-list__text">Command</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
