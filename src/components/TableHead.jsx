import React from "react";

const Th = ["Name", "Purpose", "Email", "Phone Number", "Date", "Status", ""]


const TableHead = () => {
  return (
    <>
      {/* Table header */}
      {/* <thead className="bg-gray-50 mb-6 shadow-md">
        <tr>
          <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
            Name
          </th>
          <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
            Purpose
          </th>
          <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
            Email
          </th>
          <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
            Phone number
          </th>
          <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
            Date
          </th>
          <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
            Status
          </th>
          <th className="text-xl font-medium text-gray-900 px-6 py-4 text-center">

          </th>
        </tr>
      </thead> */}
      <div className="grid grid-cols-7 bg-white px-2 py-2 rounded-[10px] shadow-lg">
       {
         Th.map((item, i) => (
          <>
          <h5 key={i} className="text-[16px] font-medium pl-10">
            {item}
          </h5>
          </>
         ))
       }
      </div>
    </>
  );
};

export default TableHead;
