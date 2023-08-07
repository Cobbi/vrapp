import PageTitle from "@/src/components/PageTitle";
import LoginScreen from "@/src/features/LoginScreen";
import React from "react";

const Login = () => {
  return (
    <>
      <PageTitle title="VT Software | Login" />
      <div className="p-24">
        <LoginScreen />
      </div>
    </>
  );
};

export default Login;
