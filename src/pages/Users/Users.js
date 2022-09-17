import React from "react";
import { Table } from "../../components";
import FormHolder from "../../components/FormHolder/FormHolder";
import Modal from "../../components/Modal/Modal";
import "./users.scss";

export default function Users() {
  return (
    <>
      <div className="users-head">
        <div className="users-head__wrapper">
          <h2 className="user-head__title">Foydalanuvchilar</h2>
          <p className="users-head__text">
            <span>200</span>
            users
          </p>
          <div className="users-head__form">
            <FormHolder name="search" />
          </div>
        </div>
        <div className="users-head__wrapper">
          <Modal title="title" text="text" button="add user" />
        </div>
      </div>
      <div className="users-table">
        <Table />
      </div>
    </>
  );
}
