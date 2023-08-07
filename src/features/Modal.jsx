import React, { useState, useEffect } from "react";

const Modal = () => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle click on the IoMdMore button
  const handleShowModal = (itemId) => {
    const item = Td.find((item) => item.id === itemId);

    setSelectedItem(item);
    setShowModal(true);
  };

  useEffect(() => {
    // Add a CSS class to the body element when the modal is displayed
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    // Clean up the effect
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);

  return (
    <div>
      {/* Modal */}
      {showModal && selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[480px] bg-white items-center rounded-lg px-20 pt-4 pb-8">
            {/* Rounded Avatar Image */}
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 bottom-16 rounded-full bg-gray-300 overflow-hidden">
                {/* Replace the 'avatar.jpg' with the actual URL or path to the avatar image */}
                <img
                  src="/assets/images/user.png"
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Content of your modal */}
            <div className="flex justify-between">
              <h3 className="text-3xl justify-center font-medium mb-2">
                {selectedItem?.name}
              </h3>
              <span>
                <button
                  type="button"
                  // Close the modal on button click
                  onClick={() => setShowModal(false)}
                  className="text-red-500 text-3xl font-medium mb-4 mr-12"
                >
                  <IoCloseSharp />
                </button>
              </span>
            </div>
            <div className="text-xl py-4 flex justify-center">
              <p className="font-medium">Email:</p>{" "}
              <span className="pl-8">{selectedItem?.email}</span>
            </div>
            <div className="text-xl py-4 flex justify-center">
              <p className="font-medium">Address:</p>{" "}
              <span className="pl-8">{selectedItem?.address}</span>
            </div>
            <div className="text-xl py-4 flex justify-center">
              <p className="font-medium">Phone Number:</p>{" "}
              <span className="pl-8">{selectedItem?.phone}</span>
            </div>
            <div className="text-xl py-4 flex justify-center">
              <p className="font-medium">Number of Visits:</p>{" "}
              <span className="pl-8">{selectedItem?.visits}</span>
            </div>
            <div className="text-xl py-4 flex justify-center">
              <p className="font-medium">Official Visits:</p>{" "}
              <span className="pl-8">{selectedItem?.official}</span>
            </div>
            <div className="text-xl py-4 flex justify-center">
              <p className="font-medium">Interview:</p>{" "}
              <span className="pl-8">{selectedItem?.interview}</span>
            </div>
            <div className="text-xl py-4 flex justify-center">
              <p className="font-medium">Personal:</p>{" "}
              <span className="pl-8">{selectedItem?.personal}</span>
            </div>
            <div className="text-xl py-4 flex justify-center">
              <p className="font-medium">Active Visits:</p>{" "}
              <span className="pl-8">{selectedItem?.active}</span>
            </div>
            <div className="flex justify-center gap-8">
              <div className="flex items-center border-2 border-blue-700 rounded-lg px-4 py-1">
                <BsPrinter />
                <p className="pl-4">Print</p>
              </div>
              <div className="flex items-center border-2 border-blue-700 rounded-lg  px-4 py-1">
                <CiExport />
                <p className="pl-4">Export</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;



const modal = (children, domNode) => {
  if (!domNode) {
    // use default domNode 
  } else {
    // ....
  }
  return (
    <>
      <>{children}</>
    </>
  )
}