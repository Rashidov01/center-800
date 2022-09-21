/* eslint-disable jsx-a11y/anchor-is-valid */
import { Space, Table } from "antd";
import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "nomi",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
    key: "1",
    name: "Prezident apparati topshiriqlari",
  },
  {
    key: "2",
    name: "Prezident apparati topshiriqlari",
  },
  {
    key: "3",
    name: "Prezident apparati topshiriqlari",
  },
  {
    key: "4",
    name: "Prezident apparati topshiriqlari",
  },
  {
    key: "5",
    name: "Prezident apparati topshiriqlari",
  },
  {
    key: "6",
    name: "Prezident apparati topshiriqlari",
  },
  {
    key: "7",
    name: "Prezident apparati topshiriqlari",
  },
  {
    key: "8",
    name: "Prezident apparati topshiriqlari",
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
    name: record.name,
  }),
};

const InDocType = () => {
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

export default InDocType;
