import { Select } from "antd";
import React from "react";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectComp = ({ value, option, label }) => (
  <>
    <h3 className="select-label">{label}</h3>
    <Select defaultValue="value" onChange={handleChange}>
      <Option value={value}>{option}</Option>
    </Select>
  </>
);

export default SelectComp;
