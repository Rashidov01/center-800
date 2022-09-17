/* eslint-disable jsx-a11y/anchor-is-valid */
import { Space, Table, Tag } from "antd";
import React, { useState } from "react";
import "./table.scss";
import Eye from "../../assets/icons/eye.svg";
const columns = [
  {
    title: "FIO",
    dataIndex: "fullname",
    key: "fullname",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "vazifasi",
    dataIndex: "task",
    key: "task",
  },
  {
    title: "login",
    key: "login",
    dataIndex: "login",
  },
  {
    title: "telefon raqam",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "markaziy boshqarma",
    dataIndex: "control",
    key: "control",
  },
  {
    title: "Amallar",
    key: "action",
    render: (_) => (
      <Space size="middle">
        <button className="action-btn action-btn--del">
          <i className="action-icon action-icon--edit bx bxs-edit"></i>
        </button>
        <button className="action-btn action-btn--edit">
          <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
        </button>
        <button className="action-btn action-btn--del">
          <img
            className="action-icon--del"
            src={Eye}
            alt="eye icon"
            width="20"
            height="20"
          />
        </button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    fullname: "John Brown",
    age: 32,
    task: "Frontend Developer",
    login: ["nice", "developer"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    key: "2",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    key: "3",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    key: "4",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    key: "5",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    key: "6",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    key: "7",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    key: "8",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const App = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <div className="table">
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default App;
