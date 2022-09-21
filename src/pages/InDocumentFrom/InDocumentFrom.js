import React from "react";
import { Head, InDocumentTable } from "../../components";

const InDocumentFrom = () => {
  return (
    <>
      <Head title="tashkilotlar ro'yhati" btn="yana qo'shish +" />
      <div className="doc-from">
        <InDocumentTable />
      </div>
    </>
  );
};

export default InDocumentFrom;
