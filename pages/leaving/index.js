import PageTitle from "@/src/components/PageTitle";
import LeavingScreen from "@/src/features/LeavingScreen";
import React from "react";

const Login = () => {
  return (
    <>
      <PageTitle title="VT Software | Leaving" />
      <div className="p-24">
        <LeavingScreen />
      </div>
    </>
  );
};

export default Login;
