import "./layout.scss";
import React from "react";
import { Header, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <Header />
      </header>
      <div className="page-container">
        <div className="sidebar-bar">
          <Sidebar />
        </div>
        <main className="main-page">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
