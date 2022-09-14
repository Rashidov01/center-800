import React from "react";
import { Head, Table } from "../../components";
import "./users.scss";

export default function Users() {
  return (
    <>
      <Head title="Foydalanuvchilar" btn="add new +" />
      <div className="users-table">
        <Table />
      </div>
    </>
  );
}
