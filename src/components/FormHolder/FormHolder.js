import React from "react";
import { Form, Input } from "antd";
import "./form-holder.scss";


export default function FormHolder(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
      </Form>
    </div>
  );
}
