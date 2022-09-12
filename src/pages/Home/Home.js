import React from "react";
import ApexChart from "../../components/Chart/Chart";
import Head from "../../components/Head/Head";
import "./home.scss";

export default function Home() {
  return (
    <>
      <div className="home">
        <Head title="Home page" />
        <div className="home-info">
          <div className="home-info__box">
            <span className="home-info__num">24</span>
            <h4 className="home-info__name">Foydalanuvchilar</h4>
            <span className="home-info__detail">Jonli muloqot</span>
          </div>
          <div className="home-info__box">
            <span className="home-info__num">24</span>
            <h4 className="home-info__name">Foydalanuvchilar</h4>
            <span className="home-info__detail">Jonli muloqot</span>
          </div>
          <div className="home-info__box">
            <span className="home-info__num">24</span>
            <h4 className="home-info__name">Foydalanuvchilar</h4>
            <span className="home-info__detail">Jonli muloqot</span>
          </div>
          <div className="home-info__box">
            <span className="home-info__num">24</span>
            <h4 className="home-info__name">Foydalanuvchilar</h4>
            <span className="home-info__detail">Jonli muloqot</span>
          </div>
        </div>
        <div className="home-chart">
          <ApexChart />
        </div>
      </div>
    </>
  );
}
