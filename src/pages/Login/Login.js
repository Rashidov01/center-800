import React from "react";
import "./login.scss";
import FormHolder from "../../components/FormHolder/FormHolder";
import { Head } from "../../components";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <h3 className="login__title">login page</h3>
        <div className="login-wrapper__input">
          <FormHolder
            label="Fullname"
            name="name"
            error="error"
            required="true"
          />
        </div>
        <div className="login-wrapper__input">
          <FormHolder
            label="password"
            name="password"
            error="ooo bitta bosayam narsa yoz !)))"
            required="true"
          />
        </div>
        <div className="login-btn">
          <button className="login-button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
