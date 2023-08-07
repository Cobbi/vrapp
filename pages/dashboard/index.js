import React from "react";
import DashBLayout from "@/src/components/DashBLayout";
import DashSidebar from "@/src/components/DashSidebar";
import DashBMain from "@/src/features/DashBMain";
import PageTitle from "@/src/components/PageTitle";

const Dashboard = () => {
  return (
    <DashBLayout>
      <>
      <PageTitle title="VT Software Dashboard"/>
      <div className="flex w-full h-screen rounded-3xl">
        <div className="w-1/5">
          <DashSidebar />
        </div>
        <div className="w-4/5">
          <DashBMain />
        </div>
      </div>
      </>
    </DashBLayout>
  );
};

export default Dashboard;
