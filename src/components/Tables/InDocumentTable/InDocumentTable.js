import { EyeOutlined } from "@ant-design/icons";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Space, Table } from "antd";
import React, { useState } from "react";
const columns = [
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
    order: "1",
    key: "1",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
  },
  {
    key: "2",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "1",
  },
  {
    key: "3",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "1",
  },
  {
    key: "4",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "1",
  },
  {
    key: "5",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "1",
  },
  {
    key: "6",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "1",
  },
  {
    key: "7",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "1",
  },
  {
    key: "8",
    name: "O’zbekiston Respublikasi Prezidentining farmon,farmoyish,qarorlari",
    order: "1",
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

const InDocumentTable = () => {
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

export default InDocumentTable;
