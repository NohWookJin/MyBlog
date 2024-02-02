import React from "react";
import LoginFormContainer from "../containers/auth/LoginFormContainer";
import AuthTemplate from "../components/auth/AuthTemplate";

const Login = () => {
  return (
    <AuthTemplate>
      <LoginFormContainer />
    </AuthTemplate>
  );
};

export default Login;
