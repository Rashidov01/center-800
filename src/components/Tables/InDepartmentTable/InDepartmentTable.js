/* eslint-disable jsx-a11y/anchor-is-valid */
import { Space, Table } from "antd";
import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Bo'lim nomi",
    dataIndex: "order",
    key: "order",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Bo'linma",
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
    order: "Hududdiy bo'limlar va ijodiy kengashlar bilan ishlash bo'limi",
    name: "Markaziy boshqarma",
  },
  {
    key: "2",
    order: "Hududdiy bo'limlar va ijodiy kengashlar bilan ishlash bo'limi",
    name: "Markaziy boshqarma",
  },
  {
    key: "3",
    order: "Hududdiy bo'limlar va ijodiy kengashlar bilan ishlash bo'limi",
    name: "Markaziy boshqarma",
  },
  {
    key: "4",
    order: "Hududdiy bo'limlar va ijodiy kengashlar bilan ishlash bo'limi",
    name: "Markaziy boshqarma",
  },
  {
    key: "5",
    order: "Hududdiy bo'limlar va ijodiy kengashlar bilan ishlash bo'limi",
    name: "Markaziy boshqarma",
  },
  {
    key: "6",
    order: "Hududdiy bo'limlar va ijodiy kengashlar bilan ishlash bo'limi",
    name: "Markaziy boshqarma",
  },
  {
    key: "7",
    order: "Hududdiy bo'limlar va ijodiy kengashlar bilan ishlash bo'limi",
    name: "Markaziy boshqarma",
  },
  {
    key: "8",
    order: "Hududdiy bo'limlar va ijodiy kengashlar bilan ishlash bo'limi",
    name: "Markaziy boshqarma",
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

const InDepartmentTable = () => {
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

export default InDepartmentTable;
