import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("select");

  const [fieldErrors, setFieldErrors] = useState({});
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!name) {
      errors.name = "Your name is required";
    }
    if (!email) {
      errors.email = "Your email is required";
    }
    if (!password) {
      errors.password = "Your password is required";
    }
    if (gender === "select") {
      errors.gender = "Your gender is required";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      // Make the API request to the signup API route
      const response = await axios.post('http://localhost:5000/api/v1/auth/signup', {
        name,
        email,
        password,
        gender,
      });

      const data = response.data;

      if (response.status === 200) {
        // Registration successful
        console.log('Registration successful:', data);

        // Clear the form fields and field errors after successful registration
        setName('');
        setEmail('');
        setPassword('');
        setGender('select');
        setFieldErrors({});

        // Redirect to the dashboard after successful registration
        await router.push('/dashboard');
      } else {
        // Registration failed
        console.error('Error during registration:', data.error);
        // Handle error and show appropriate error message
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('Error during registration:', error.message);
      // Show a generic error message to the user
    }
  };

  return (
    <div className="w-full flex space-x-24 mx-auto">
      <div
        className="md:w-1/2 sm:w-full bg-cover bg-center h-[720px] rounded-3xl mx-12 py-2"
        style={{ backgroundImage: `url('/assets/images/banner1.avif')` }}
      ></div>
      <div className="md:w-1/2 sm:w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white h-[720px] border border-gray-300 p-12 rounded-3xl shadow-lg"
        >
          <div className="flex flex-col justify-center items-center pt-2 pb-4 space-x-12">
            <h1 className="flex text-3xl text-blue-700 mx-2">Create a new account</h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-xl mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {fieldErrors.name && (
              <p className="text-red-400">{fieldErrors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-xl mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="cobby@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {fieldErrors.email && (
              <p className="text-red-400">{fieldErrors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-xl mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {fieldErrors.password && (
              <p className="text-red-400">{fieldErrors.password}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col justify-between">
            <label
              className="block text-xl mb-2"
              htmlFor="gender"
            >
              Sex
            </label>
            <select
              id="selectOption"
              name="gender"
              value={gender}
              className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              onChange={(e) => setGender(e.target.value)} // Add onChange event handler
            >
              <option value="select">-- Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {fieldErrors.gender && (
              <p className="text-red-400">{fieldErrors.gender}</p>
            )}
          </div>
          <div className="w-full text-xl bg-blue-700 py-2 px-4 text-white rounded-md hover:bg-blue-700 transition duration-300">
            {/* Use flex to center the button content */}
            <button
              type="submit"
              className="flex items-center justify-center w-full h-full"
            >
              <h1 className="text-xl">Register</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
