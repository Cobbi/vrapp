import React, { useState } from "react";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { LuFileQuestion, LuLogOut } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineDocument } from "react-icons/hi";
import Image from "next/image";

const DashSidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  return (
    <>
      <div className="w-[300px] relative bg-slate-50 p-12 h-screen items-center left-12 top-[-32px] rounded-3xl border border-gray-300 shadow-2xl">
        <div className="pb-12 pt-4 text-center">
          <Image
            className="rounded-full bg-blue-500 inline-block"
            src="/assets/images/priscilla.jpeg"
            width={120}
            height={120}
            alt="profile"
          />
          <p className="pt-2 text-xl text-slate-400">Welcome back</p>
          <h1 className="text-xl pt-2">Priscilla Boateng</h1>
        </div>
        <ul className="space-y-4 justify-center">
          <li
            className={`group text-xl justify-end text-blue-700 px-8 rounded-full py-6 ${
              activeMenuItem === "dashboard" ? "text-white bg-blue-700" : ""
            }`}
            onClick={() => setActiveMenuItem("dashboard")}
          >
            <Link className="flex justify-end" href="/dashboard/">
              <div className="text-2xl px-4">
                <LuLayoutDashboard className="" />
              </div>{" "}
              Dashboard
            </Link>
          </li>
          <li
            className={`group text-xl justify-end text-blue-700 px-8 rounded-full py-6 ${
              activeMenuItem === "visitors" ? "text-white bg-blue-700" : ""
            }`}
            onClick={() => setActiveMenuItem("visitors")}
          >
            <Link className="flex justify-end" href="/dashboard/visitors">
              {" "}
              <div className="text-2xl px-4">
                <PiUsersThreeDuotone className="" />
              </div>
              Visitors
            </Link>
          </li>

          <li
            className={`group text-xl justify-end text-blue-700 px-8 rounded-full py-6 ${
              activeMenuItem === "enquiries" ? "text-white bg-blue-700" : ""
            }`}
            onClick={() => setActiveMenuItem("enquiries")}
          >
            <Link className="flex justify-end" href="/dashboard/enquiries">
              <div className="text-2xl px-4">
                <LuFileQuestion />
              </div>
              Enquiries
            </Link>
          </li>
          <li
            className={`group text-xl justify-end text-blue-700 px-8 rounded-full py-4 ${
              activeMenuItem === "documents" ? "text-white bg-blue-700" : ""
            }`}
            onClick={() => setActiveMenuItem("documents")}
          >
            <Link
              className="flex py-2 justify-end"
              href="/dashboard/documents"
            >
              <div className="text-2xl px-4">
                <HiOutlineDocument />
              </div>
              Documents
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-12 left-12 text-xl items-center">
          <ul className="space-y-3">
            <li className="text-xl text-blue-700 items-center hover:justify-center hover:items-center hover:pr-4 hover:rounded-full hover:py-2 hover:text-white hover:bg-blue-700">
              <Link
                className="flex py-2 px-4 items-center"
                href="/dashboard/settings"
              >
                <div className="text-2xl px-4">
                  <IoSettingsOutline />
                </div>
                Settings
              </Link>
            </li>
            <li className="text-xl text-blue-700 items-center hover:justify-center hover:items-center hover:pr-4 hover:rounded-full hover:py-2 hover:text-white hover:bg-blue-700">
              <Link className="flex py-2 px-4 items-center" href="/leaving">
                <div className="text-2xl px-4">
                  <LuLogOut />
                </div>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashSidebar;
