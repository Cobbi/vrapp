import React from "react";
import RegisterScreen from "@/src/features/RegisterScreen";
import PageTitle from "@/src/components/PageTitle";

const Register = () => {
  return (
    <>
      <PageTitle title="VT Software | Register" />
      <div className="p-24">
        <RegisterScreen />
      </div>
    </>
  );
};

export default Register;
