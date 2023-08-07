import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LeavingScreen = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!login.email) {
      errors.email = "Your email is required";
    }
    if (!login.password) {
      errors.password = "Your Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const addLogin = async () => {
      setLogin({
        email: "",
        password: "",
      });
      setFieldErrors({});

      router.push("/");
    };

    addLogin();
  };

  return (
    <div className="w-full flex space-x-24 mx-auto ">
      <div
        className="w-1/2 bg-cover bg-center h-[720px] rounded-3xl mx-12 py-8"
        style={{ backgroundImage: `url('/assets/images/banner1.avif')` }}
      ></div>
      <div className="w-1/2">
        <div
          className="w-full bg-white h-[720px] grid grid-cols-1 border border-gray-300 p-4 rounded-3xl shadow-lg"
        >

          <div className="flex flex-col justify-center items-center pb-2 space-x-12">
            <h1 className="text-5xl text-blue-700 mx-2">Leaving</h1>
          </div>
          <div className="space-y-8 mx-auto">
            <div className="w-[200px] text-white text-xl bg-blue-700 py-2 px-2 rounded-xl hover:bg-blue-700 transition duration-300">
              <Link
                className="flex justify-center "
                href="/login"
              >
                <h1 className="text-xl pr-2">Proceed</h1>
                <span className="text-4xl">
                  <BsArrowRightShort />
                </span>
              </Link>
            </div>
            <div className="w-[200px] text-white text-xl bg-gray-500 py-2 px-2 rounded-xl hover:bg-blue-700 transition duration-300">
              <Link
                className="flex justify-center items-center"
                href="/dashboard"
              >
                <h1 className="text-xl pr-2">Go back</h1>
                <span className="text-4xl">
                  <BsArrowLeftShort />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavingScreen;
