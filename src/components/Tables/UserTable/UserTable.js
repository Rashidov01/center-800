/* eslint-disable jsx-a11y/anchor-is-valid */
import { Space, Table } from "antd";
import React, { useState } from "react";
import "./usertable.scss";
import { EyeOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Avatar",
    dataIndex: "img",
    key: "img",
    render: (text, record) => (
      <img
        src={record.img}
        alt="avatar imag"
        width="40"
        height="40"
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          width: "50px",
          height: "50px",
        }}
      />
    ),
  },
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
    key: "action",
    render: (_) => (
      <Space size="middle">
        <div className="action-wrapper">
          <button className="action-btn action-btn--eye">
            <EyeOutlined className="action-icon " />
          </button>
          <button className="action-btn action-btn--edit">
            <i className="action-icon action-icon--edit bx bx-pencil"></i>
          </button>
          <button className="action-btn action-btn--del">
            <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
          </button>
        </div>
      </Space>
    ),
  },
];
const data = [
  {
    img: require("../../../assets/images/rb.jpeg"),
    key: "1",
    fullname: "John Brown",
    age: 32,
    task: "Frontend Developer",
    login: ["nice", "developer"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    img: require("../../../assets/images/girl1.jpeg"),
    key: "2",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    img: require("../../../assets/images/girl2.jpeg"),
    key: "3",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    img: require("../../../assets/images/girl3.jpeg"),
    key: "4",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    img: require("../../../assets/images/girl4.jpeg"),
    key: "5",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    img: require("../../../assets/images/girl5.jpeg"),
    key: "6",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    img: require("../../../assets/images/girl6.jpeg"),
    key: "7",
    fullname: "Jim Green",
    age: 42,
    task: "Frontend Developer",
    login: ["loser"],
    phone: 1234567,
    control: "markaziy boshqarma",
  },
  {
    img: require("../../../assets/images/rb.jpeg"),
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
  const [selectionType] = useState("checkbox");

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
