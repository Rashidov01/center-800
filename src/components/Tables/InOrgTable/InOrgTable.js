/* eslint-disable jsx-a11y/anchor-is-valid */
import { Space, Table } from "antd";
import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import "./inorgtable.scss";
const columns = [
  {
    title: "Raqami",
    dataIndex: "order",
    key: "order",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tashkilot nomi",
    dataIndex: "name",
    key: "name",
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
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "01-01",
  },
  {
    key: "2",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "01-01",
  },
  {
    key: "3",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "01-01",
  },
  {
    key: "4",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "01-01",
  },
  {
    key: "5",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "01-01",
  },
  {
    key: "6",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "01-01",
  },
  {
    key: "7",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "01-01",
  },
  {
    key: "8",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "01-01",
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

const InOrgTable = () => {
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

export default InOrgTable;
