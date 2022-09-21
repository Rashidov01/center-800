import React from "react";
import { DocTable } from "../../components";
import FormHolder from "../../components/FormHolder/FormHolder";
import Modal from "../../components/Modal/Modal";

export default function Documents() {
  return (
    <>
      <div className="users-head">
        <div className="users-head__wrapper">
          <h2 className="user-head__title">Hujjatlar ro'yhati</h2>
          <div className="users-head__form">
            <FormHolder name="search" />
          </div>
        </div>
        <div className="users-head__wrapper">
          <Modal title="Foydalanuvchi" text="text" button="Qo'shish" />
        </div>
      </div>
      <DocTable />
    </>
  );
}
