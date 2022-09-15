import React from "react";
import { Table } from "../../components";
import FormHolder from "../../components/FormHolder/FormHolder";
import "./users.scss";

export default function Users() {
  return (
    <>
      <div className="users-head">
        <div className="users-head__wrapper">
          <h2 className="user-head__title">Foydalanuvchilar</h2>
          <p className="users-head__text">
            <span>200 </span>
            users
          </p>
          <div className="users-head__form">
            {/* <input className="users-head__inp" type="text" />
            <button className="users-head__button" type="button">
              <i class="users-head__icon bx bx-search"></i>
            </button> */}
            <FormHolder name="search" />
          </div>
        </div>
        <div className="users-head__wrapper">
          <button className="users-head__btn">add new +</button>
        </div>
      </div>
      <div className="users-table">
        <Table />
      </div>
    </>
  );
}
