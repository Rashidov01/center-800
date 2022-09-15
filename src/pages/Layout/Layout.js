import "./layout.scss";
import React from "react";
import { Header, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {
  const addclass = useSelector((state) => state.class);

  return (
    <>
      <div className={`site-content ${addclass.value}`}>
        <header className="site-header">
          <Header />
        </header>
        <div className="page-container">
          <div className="sidebar-bar">
            <Sidebar />
          </div>
          <main className="main-page">
            <div className="site-container">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
