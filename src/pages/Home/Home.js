import React from "react";
import { Head } from "../../components";
import ApexChart from "../../components/Chart/Chart";
import "./home.scss";

export default function Home() {
  return (
    <>
      <div className="home">
        {/* <Head title="Home page" /> */}
        <div className="home-info">
          <div className="home-info__box">
            <div className="home-info__holder">
              <i className="home-info__icon bx bxs-bar-chart-alt-2"></i>
            </div>
            <div className="home-info__holder">
              <span className="home-info__num">24</span>
              <h4 className="home-info__name">Foydalanuvchilar</h4>
              <span className="home-info__detail">Jonli muloqot</span>
            </div>
          </div>
          <div className="home-info__box">
            <div className="home-info__holder">
              <i className="home-info__icon bx bxs-bar-chart-alt-2"></i>
            </div>
            <div className="home-info__holder">
              <span className="home-info__num">16</span>
              <h4 className="home-info__name">Hujjatlar</h4>
              <span className="home-info__detail">Jonli muloqot</span>
            </div>
          </div>
          <div className="home-info__box">
            <div className="home-info__holder">
              <i className="home-info__icon bx bxs-bar-chart-alt-2"></i>
            </div>
            <div className="home-info__holder">
              <span className="home-info__num">37</span>
              <h4 className="home-info__name">Arxiv Hujjatlar</h4>
              <span className="home-info__detail">Jonli muloqot</span>
            </div>
          </div>
          <div className="home-info__box">
            <div className="home-info__holder">
              <i className="home-info__icon bx bxs-bar-chart-alt-2"></i>
            </div>
            <div className="home-info__holder">
              <span className="home-info__num">34</span>
              <h4 className="home-info__name">Buyruqlar</h4>
              <span className="home-info__detail">Jonli muloqot</span>
            </div>
          </div>
        </div>
        <div className="home-chart">
          <Head title="hujjatlar" />
          <div className="home-chart__holder">
            <ApexChart />
          </div>
        </div>
      </div>
    </>
  );
}
