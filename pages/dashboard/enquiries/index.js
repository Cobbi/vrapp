import React, { useState } from "react";
import DashBLayout from "@/src/components/DashBLayout";
import DashSidebar from "@/src/components/DashSidebar";
import DashBMain from "@/src/features/DashBMain";
import { IoMdNotificationsOutline } from "react-icons/io";
import Search from "@/src/components/Search";
import Card from "@/src/components/Card";
import TableHead from "@/src/components/TableHead";
import TableBody from "@/src/components/TableBody";
import { BsPrinter } from "react-icons/bs";
import { CiExport } from "react-icons/ci";
import { BiHistory } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import CardPlus from "@/src/components/CardPlus";
import PageTitle from "@/src/components/PageTitle";
import { PiFileCsvBold } from "react-icons/pi";
import { MdOutlinePictureAsPdf } from "react-icons/md";

const Enquiries = () => {
  const card1 = {
    title: "Create new enquiry",
    value: <AiOutlinePlus />,
  };
  const card2 = {
    title: "Total enquiries",
    value: 24,
  };
  const card3 = {
    title: "Answered enquiries",
    value: 18,
  };
  const card4 = {
    title: "Unanswered enquiries",
    value: 6,
  };
  // State to control the visibility of the export dropdown
  const [showExportDropdown, setShowExportDropdown] = useState(false);

  // Function to handle click on the "Export" button
  const handleExportClick = () => {
    setShowExportDropdown(!showExportDropdown);
  };

  // Function to handle export option selection (CSV or PDF)
  const handleExportOptionClick = (format) => {
    // Perform export logic here based on the selected format (CSV or PDF)
    console.log("Exporting as " + format);
    // For example, you can call a function to export the data using a library like 'react-csv' or 'jspdf' for PDF generation
    // For simplicity, we are just logging the format here.
    setShowExportDropdown(false); // Hide the dropdown after selecting the format
  };

  return (
    <DashBLayout>
      <PageTitle title="VT Software Enquiries" />
      <div className="flex w-full h-screen">
        <div className="w-1/5">
          <DashSidebar />
        </div>
        <div className="w-4/5">
          <div className="flex w-full pt-8 pb-4 px-12">
            <div className="w-3/5 text-2xl font-medium">
              Manage your enquiries
            </div>
            <div className="flex w-2/5 justify-between items-center gap-x-2">
              <div className="relative flex items-center">
                {/* <Search /> */}
              </div>
              <div className="relative text-3xl text-slate-500 rounded-2xl border border-slate-300 border-solid px-2 py-2 pb-[-4px]">
                <IoMdNotificationsOutline />
                {/* Rounded yellow circle */}
                <div className="w-3 h-3 rounded-full bg-yellow-400 absolute top-1 -right-1" />
              </div>
            </div>
          </div>
          <div className="w-full pt-2 px-12">
            <div className="grid grid-cols-4 space-x-16">
              <div className="w-[320px]">
                <CardPlus title={card1.title} value={card1.value} />
              </div>
              <div className="w-[260px]">
                <Card title={card2.title} value={card2.value} />
              </div>
              <div className="w-[260px]">
                <Card title={card3.title} value={card3.value} />
              </div>
              <div className="w-[300px]">
                <Card title={card4.title} value={card4.value} />
              </div>
            </div>
          </div>
          <div className="w-full pt-24 px-12">
            <div className="flex w-full">
              <div className="w-4/5 flex items-center gap-x-4 text-blue-700">
                <div className="text-3xl">
                  <BiHistory />
                </div>
                <p className="text-blue-700 text-xl">Enquiry history</p>
              </div>
              <div className="flex w-1/5 justify-between space-x-12 relative">
                <div className="relative inline-block">
                  <button
                    type="button"
                    onClick={handleExportClick}
                    className="flex items-center border-2 border-blue-700 rounded-lg px-4 py-1"
                  >
                    <CiExport />
                    <p className="px-4">Export</p>
                  </button>

                  {showExportDropdown && (
                    <div className="absolute mt-2 w-[120%] bg-white border border-gray-300 rounded-lg shadow-lg">
                      <p className="text-center py-4">Export file as:</p>
                      <button
                        onClick={() => handleExportOptionClick("csv")}
                        className="block w-full text-center px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex justify-center gap-x-2">
                          <PiFileCsvBold className="text-xl"/>
                          <p className="text-md text-center">CSV</p>
                        </div>
                      </button>
                      <button
                        onClick={() => handleExportOptionClick("pdf")}
                        className="block w-full text-center px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex justify-center gap-x-2">
                          <MdOutlinePictureAsPdf className="text-xl"/>
                          <p className="text-md text-center">PDF</p>
                        </div>
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="flex items-center border-2 border-blue-700 rounded-lg px-4 py-1"
                >
                  <BsPrinter />
                  <p className="pl-4">Print</p>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full pt-8 px-12 py-4">
            <div className="min-w-full bg-transparent">
              <TableHead />
              {/* <br /> */}

              <TableBody />
            </div>
          </div>
        </div>
      </div>
    </DashBLayout>
  );
};

export default Enquiries;
