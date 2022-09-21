import React from "react";
import { OrgTable } from "../../components";
import FormHolder from "../../components/FormHolder/FormHolder";
import "./organization.scss";

export default function Organization() {
  return (
    <>
      <div className="users-head">
        <div className="users-head__wrapper">
          <h2 className="user-head__title">Foydalanuvchilar</h2>
          <div className="users-head__form">
            <FormHolder name="search" />
          </div>
        </div>
      </div>
      <OrgTable />
    </>
  );
}
