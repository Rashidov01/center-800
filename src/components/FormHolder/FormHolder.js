import React from "react";
import { Form, Input } from "antd";

export default function FormHolder(props) {
  return (
    <div>
      <Form.Item
        label={props.label}
        name={props.name}
        rules={[
          {
            required: true,
            message: props.error,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
}
