import React from "react";
import "./sidebar.scss";
import {
  NumberOutlined,
  ExclamationCircleOutlined,
  ExceptionOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Hisobotlar", "sub1", <NumberOutlined />, [
    getItem("Xodimlar bo'yicha", "1", <NumberOutlined />),
    getItem("tashkilot bo'yicha", "2", <NumberOutlined />),
  ]),
];

const items2 = [
  getItem("Ma'lumotnomalar", "sub2", <ExclamationCircleOutlined />, [
    getItem("tashkilotlar", "1", <ExceptionOutlined />),
    getItem("bo'limlar", "2", <ExceptionOutlined />),
    getItem("hujjat kelgan tashkilot", "2", <ExceptionOutlined />),
    getItem("hujjat turlari", "2", <ExceptionOutlined />),
  ]),
];

const Sidebar = () => {
  const addclass = useSelector((state) => state.class);
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.key === "1") {
      navigate("/employee");
    } else if (e.key === "2") {
      navigate("/organization");
    }
  };
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
                <span className="sidebar-list__text">
                  ijro Ma'lumotnomalari
                </span>
              </NavLink>
            </li>
            <li className="sidebar-list__item">
              <Menu
                onClick={onClick}
                mode={addclass.value === "opened" ? "vertical" : "inline"}
                items={items}
              />
            </li>
            <li className="sidebar-list__item">
              <Menu
                onClick={onClick}
                mode={addclass.value === "opened" ? "vertical" : "inline"}
                items={items2}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
