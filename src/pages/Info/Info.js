import React from "react";
import { InfoTable } from "../../components";
import FormHolder from "../../components/FormHolder/FormHolder";
import Modal from "../../components/Modal/Modal";

const Info = () => {
  return (
    <>
      <div className="users-head">
        <div className="users-head__wrapper">
          <h2 className="user-head__title">javob xatlari ro'yhati</h2>
          <div className="users-head__form">
            <FormHolder name="search" />
          </div>
        </div>
        <div className="users-head__wrapper">
          <Modal title="Foydalanuvchi" text="text" button="yangi qo'shish +" />
        </div>
      </div>
      <div className="info-table">
        <InfoTable />
      </div>
    </>
  );
};

export default Info;
