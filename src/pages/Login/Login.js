import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.scss";
import FormHolder from "../../components/FormHolder/FormHolder";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <Form
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <FormHolder label="label" name="name" error="error" />
        </Form>
      </div>
    </div>
  );
};

export default Login;
