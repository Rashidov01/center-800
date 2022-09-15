import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import "./form-holder.scss";

export default function FormHolder(props) {
  const [inpType, setInpType] = useState(<Input />);
  useEffect(() => {
    switch (props.name) {
      case "password":
        setInpType(<Input.Password />);
        break;
      case "search":
        setInpType(<Input.Search />);
        break;
      case "area":
        setInpType(<Input.TextArea />);
        break;
      case "text":
        setInpType(<Input />);
        break;
      default:
        break;
    }
  }, []);

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
              required: props.bool,
              message: props.error,
            },
          ]}
        >
          {inpType}
        </Form.Item>
      </Form>
    </div>
  );
}
