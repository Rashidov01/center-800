import React from "react";
import { Head, InDepartmentTable } from "../../components";

const InDocument = () => {
  return (
    <>
      <Head title="Tashkilotlar ro'yhati" />
      <div className="info-document">
        <InDepartmentTable />
      </div>
    </>
  );
};

export default InDocument;
