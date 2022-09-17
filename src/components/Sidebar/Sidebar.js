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
                <span className="sidebar-list__text">Ish stoli</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/users">
                <i className="sidebar-list__icon bx bxs-group"></i>
                <span className="sidebar-list__text">Foydalanuvchilar</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/documents">
                <i className="sidebar-list__icon bx bxs-file-doc"></i>
                <span className="sidebar-list__text">Hujjatlar</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/archive">
                <i className="sidebar-list__icon bx bxs-file-archive"></i>
                <span className="sidebar-list__text">Arxiv Hujjatlar</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/command">
                <i className="sidebar-list__icon bx bx-command"></i>
                <span className="sidebar-list__text">Buyruqlar</span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <NavLink className="sidebar-list__link" to="/info">
                <i className="sidebar-list__icon bx bx-info-circle"></i>
                <span className="sidebar-list__text">Ma'lumotnomalar</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
