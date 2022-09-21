import React from "react";
import { ComTable } from "../../components";
import FormHolder from "../../components/FormHolder/FormHolder";
import Modal from "../../components/Modal/Modal";

const Command = () => {
  return (
    <>
      <div className="users-head">
        <div className="users-head__wrapper">
          <h2 className="user-head__title">Buyruqlar ro'yhati</h2>
          <div className="users-head__form">
            <FormHolder name="search" />
          </div>
        </div>
        <div className="users-head__wrapper">
          <Modal title="Foydalanuvchi" text="text" button="yangi qo'shish" />
        </div>
      </div>
      <div className="command-table">
        <ComTable />
      </div>
    </>
  );
};

export default Command;
