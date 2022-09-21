/* eslint-disable array-callback-return */
import React from "react";
import { Head } from "../../components";
import "./employee.scss";

const data = [
  {
    img: require("../../assets/images/rb.jpeg"),
    key: "1",
    fullname: "John Brown",
  },
  {
    img: require("../../assets/images/girl2.jpeg"),
    key: "2",
    fullname: "Jim blue",
  },
  {
    img: require("../../assets/images/girl3.jpeg"),
    key: "3",
    fullname: "Jim red",
  },
  {
    img: require("../../assets/images/girl1.jpeg"),
    key: "4",
    fullname: "Jim Green",
  },
  {
    img: require("../../assets/images/girl4.jpeg"),
    key: "5",
    fullname: "Jim Green",
  },
  {
    img: require("../../assets/images/girl5.jpeg"),
    key: "6",
    fullname: "Jim Green",
  },
  {
    img: require("../../assets/images/girl6.jpeg"),
    key: "7",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    img: require("../../assets/images/rb.jpeg"),
    key: "8",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
];

export default function Hodim() {
  return (
    <>
      <Head title="Hodimlar bo'yicha hisobot" />
      <div className="employee-container">
        {data.map((item) => {
          return (
            <div key={item.key} className="employee-container__box emp-box">
              <div className="emp-box__head">
                <img
                  className="emp-box__head-img img-hover"
                  src={item.img}
                  alt="avatar"
                  width="200"
                  height="300"
                />
              </div>
              <div className="emp-box__body">
                <div className="emp-box__wrapper">
                  <h3 className="emp-box__wrapper-title">{item.fullname}</h3>
                </div>
                <ul className="emp-box__body-list">
                  <li className="emp-box__body-item">
                    <h4 className="emp-box__body-name">
                      Jami biriktirilgan hujjatlar soni
                    </h4>
                    <span className="emp-box__body-num num--secondary">20</span>
                  </li>
                  <li className="emp-box__body-item">
                    <h4 className="emp-box__body-name">
                      Jami biriktirilgan hujjatlar soni
                    </h4>
                    <span className="emp-box__body-num num--info">20</span>
                  </li>
                  <li className="emp-box__body-item">
                    <h4 className="emp-box__body-name">
                      Jami biriktirilgan hujjatlar soni
                    </h4>
                    <span className="emp-box__body-num num--success">20</span>
                  </li>
                  <li className="emp-box__body-item">
                    <h4 className="emp-box__body-name">
                      Jami biriktirilgan hujjatlar soni
                    </h4>
                    <span className="emp-box__body-num num--danger">20</span>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
