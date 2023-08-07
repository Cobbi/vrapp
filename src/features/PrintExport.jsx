import React, { useState } from "react";

const PrintExport = () => {
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
    setShowExportDropdown(false); // Hide the dropdown after selecting the format
  };

  return (
    <div>
      {showExportDropdown && (
        <div className="absolute mt-2 w-[120%] bg-white border border-gray-300 rounded-lg shadow-lg">
          <p className="text-center py-4">Export file as:</p>
          <button
            onClick={() => handleExportOptionClick("csv")}
            className="block w-full text-center px-4 py-4 hover:bg-gray-100"
          >
            <div className="flex justify-center gap-x-2">
              <PiFileCsvBold className="text-xl" />
              <p className="text-md text-center">CSV</p>
            </div>
          </button>
          <button
            onClick={() => handleExportOptionClick("pdf")}
            className="block w-full text-center px-4 py-4 hover:bg-gray-100"
          >
            <div className="flex justify-center gap-x-2">
              <MdOutlinePictureAsPdf className="text-xl" />
              <p className="text-md text-center">PDF</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default PrintExport;
