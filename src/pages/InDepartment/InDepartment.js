import React from "react";
import { Head, InDepartmentTable } from "../../components";

const InDepartment = () => {
  return (
    <div>
      <Head title="Bo'limlar ro'yhati" btn="yana qo'shish +" />
      <div className="info-department">
        <InDepartmentTable />
      </div>
    </div>
  );
};

export default InDepartment;
