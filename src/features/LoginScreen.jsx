import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginScreen = () => {
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
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white h-[720px] border border-gray-300 p-8 rounded-3xl shadow-lg"
        >
          <div className="flex flex-col justify-center items-center pt-12 pb-12 space-x-12">
            <h1 className="flex text-5xl text-blue-700 mx-2">Welcome</h1>
            <p className="text-xl pt-8">Provide the required details to sign</p>
          </div>

          <div className="mb-4">
            <label className="block text-xl mb-4" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="lindaosei@webbermill.com"
              value={login.email}
              onChange={handleInputChange}
            />
            {fieldErrors.email && (
              <p className="text-red-400">{fieldErrors.email}</p>
            )}
          </div>
          <div className="mb-8">
            <label className="block text-xl mb-4" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                // Toggle the input type
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={login.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute top-1/2 right-2  text-2xl transform -translate-y-1/2 text-gray-500"
                onClick={handleTogglePassword}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {fieldErrors.password && (
              <p className="text-red-400">{fieldErrors.password}</p>
            )}
          </div>
          <div className="mb-8">
            <p className="text-[18px] text-center text-gray-400">
              <Link href="/register">Register</Link>
            </p>
          </div>
          <div className="flex justify-center items-center mb-12">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="text-2xl cursor-pointer"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label className="ml-2 text-[18px]" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <div className="w-[200px] mx-auto text-white text-xl bg-blue-700 py-2 px-2 rounded-xl hover:bg-blue-700 transition duration-300">
            <Link
              className="flex justify-center items-center"
              href="/dashboard"
            >
              <h1 className="text-xl pr-2">Proceed</h1>
              <span className="text-4xl">
                <BsArrowRightShort />
              </span>
            </Link>
          </div>
          {/* <div className="w-full justify-center text-white text-xl bg-amber-400 mt-2 py-2 px-4 rounded-md hover:bg-amber-700 transition duration-300">
            <Link className="" href="/register">
              <h1 className="text-center text-xl">Register</h1>
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
