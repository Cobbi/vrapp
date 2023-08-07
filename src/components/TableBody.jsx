import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMore } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { BsPrinter } from "react-icons/bs";
import { CiExport } from "react-icons/ci";
import Pagination from "../features/Pagination";
import Modal from "@/src/features/Modal";
import { createPortal } from "react-dom";
import DummyModal from "../features/DummyModal";


export const Td = [
  {
    id: 1,
    name: "Linda Ann",
    visitorId: "GF 323-456-1",
    purpose: "Visiting",
    email: "linda006@gmail.hu",
    phone: "0203495884",
    date: "12th March, 2021",
    status: "Active",
    address: "123 Main St",
    visits: 4,
    official: 1,
    interview: 0,
    personal: 3,
    active: "No",
    imgUri: "/assets/images/priscilla.jpg",
  },
  {
    id: 2,
    name: "Cobby Anim",
    visitorId: "GF 723-456-7",
    purpose: "Official",
    email: "cobby@gmail.com",
    phone: "0203495884",
    date: "12th March, 2021",
    status: "Active",
    address: "793 Main St",
    visits: 9,
    official: 2,
    interview: 1,
    personal: 3,
    active: "No",
    imgUri: "/assets/images/cobby.jpg",
  },
  {
    id: 3,
    name: "Yaa Addo",
    visitorId: "GF 763-456-4",
    purpose: "Personal",
    email: "yaa@gmail.com",
    phone: "0203495884",
    date: "12th March, 2021",
    status: "Active",
    visits: 7,
    official: 2,
    interview: 0,
    personal: 1,
    active: "Yes",
    imgUri: "/assets/images/user.png",
  },
  {
    id: 4,
    name: "Erica Thomson",
    visitorId: "GF 723-476-8",
    purpose: "Personal",
    email: "erica@gmail.com",
    phone: "0203495884",
    date: "12th March, 2021",
    status: "Active",
    address: "923 Main St",
    visits: 4,
    official: 1,
    interview: 0,
    personal: 3,
    active: "No",
    imgUri: "/assets/images/user.png",
  },
  {
    id: 5,
    name: "Jane Amina",
    visitorId: "GF 424-456-4",
    purpose: "Official",
    email: "jane@gmail.com",
    phone: "0203495884",
    date: "12th March, 2021",
    status: "Active",
    address: "723 Main St",
    visits: 4,
    official: 1,
    interview: 0,
    personal: 3,
    active: "No",
    imgUri: "/assets/images/priscilla.jpg",
  },
  {
    id: 6,
    name: "Tina Ruby",
    visitorId: "GF 552-456-2",
    purpose: "Visiting",
    email: "tina@gmail.com",
    phone: "0203495884",
    date: "12th March, 2021",
    status: "Active",
    visits: 4,
    official: 1,
    interview: 0,
    personal: 3,
    active: "No",
    imgUri: "/assets/images/user.png",
  },
  {
    id: 7,
    name: "Lina Ann",
    visitorId: "GF 723-456-4",
    purpose: "Official",
    email: "lina@gmail.com",
    phone: "0203495884",
    date: "12th March, 2021",
    status: "Active",
    visits: 4,
    official: 1,
    interview: 0,
    personal: 3,
    active: "No",
    imgUri: "/assets/images/user.png",
  },
];

const TableBody = () => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  // Function to handle click on the IoMdMore button
  const handleShowModal = (id) => {
    // const item = Td.filter((item) => item.id !== id);
    setSelectedItem(id)
    // console.log(selectedItem);
    setShowModal(true);
  };

  // The number of items per page
  const PAGE_SIZE = 5;

  // Data array
  const data = Array.from({ length: 15 }, (_, index) => index + 1);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const paginatedData = data.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <>{createPortal(<DummyModal id={selectedItem} />, document.body)}</>
      )}

      {/* Blurred background */}
      <div
        className={`grid grid-cols-7 h-[260px]  bg-[#F9F9F9]  py-4 rounded-[10px] shadow-lg mt-8 overflow-y-scroll border border-gray-300 space-y-4`}
      >
        {Td.map((item) => (
          <React.Fragment key={item.id}>
            <h5 className="col-span-1 text-[16px] font-medium pl-10 py-2 bg-white">
              {item.name}
            </h5>
            <h5 className="text-[16px] font-medium pl-10 bg-white py-2">
              {item.purpose}
            </h5>
            <h5 className="text-[16px] font-medium pl-10 bg-white py-2">
              {item.email}
            </h5>
            <h5 className="text-[16px] font-medium pl-10 bg-white py-2">
              {item.phone}
            </h5>
            <h5 className="text-[16px] font-medium pl-10 bg-white py-2">
              {item.date}
            </h5>
            <h5 className="text-[16px] font-medium pl-10 bg-white py-2">
              {item.status}
            </h5>
            <button
              type="button"
              onClick={() => handleShowModal(item.id)}
              className="text-[16px] text-blue-700 font-medium pl-10 bg-white py-3"
            >
              <IoMdMore />
            </button>
          </React.Fragment>
        ))}
      </div>
      {/* Pagination */}
      <div className="w-full text-xl pt-8 mx-auto items-center justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default TableBody;
