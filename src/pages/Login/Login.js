import React from "react";
import "./login.scss";
import FormHolder from "../../components/FormHolder/FormHolder";
// import { Head } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  function submit() {
    navigate("/");
  }
  return (
    <div className="login">
      <div className="login-wrapper">
        <h3 className="login__title text-center">Kirish</h3>
        <div className="login-wrapper__input">
          <FormHolder label="Login" name="name" error="error" required="true" />
        </div>
        <div className="login-wrapper__input">
          <FormHolder
            label="Parol"
            name="password"
            error="ooo bitta bosayam narsa yoz !)))"
            required="true"
          />
        </div>
        <div className="login-btn">
          <button className="login-button" type="submit" onClick={submit}>
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
