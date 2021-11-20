import React from "react";
import LoginForm from "../../forms/LoginForm";
import "./style.scss";


const Login = () => {
  return (
    <div className="screen screen--login">
      <LoginForm />
    </div>
  );
}

export default Login;