import React from "react";
import "./archive.scss";
import { ArchiveTable, Head } from "../../components";

const Archive = () => {
  return (
    <div>
      <Head title="Arviv Hujjatlar" />
      <ArchiveTable />
    </div>
  );
};

export default Archive;
