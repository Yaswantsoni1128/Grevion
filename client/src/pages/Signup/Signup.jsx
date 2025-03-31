import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import {toast , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("farmer");
   const navigate = useNavigate();
  
  const sendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth/sendOtp", { email });
      if (response.data.success) {
        toast.success("OTP sent successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Failed to send OTP ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending OTP ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth/signup", {
        firstName, lastName, email, otp, password, role, phone, location
      });
      if (response.data.success) {
         toast.success("Signup successful! You can now log in.", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                setTimeout(() => {
                  navigate("/dashboard");
                }, 1000);
      } else {
        toast.error("Signup failed: " + response.data.message, {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error during signup", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-green-100 to-blue-100'>
      <ToastContainer />
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='flex items-center justify-center w-full h-[90%] '>
          <div className='items-center justify-center hidden w-1/2 h-full px-10 py-2 bg-white shadow-xl rounded-l-xl lg:flex'>
            <img src="./signup.gif" alt="" className='object-cover w-full h-full rounded-xl' />
          </div>
          <div className='flex flex-col items-center w-full h-full px-10 py-3 bg-white shadow-r-xl md:w-1/3 rounded-r-xl'>
            <h2 className='mb-4 text-3xl font-bold text-gray-700'>Create Account</h2>
            <form onSubmit={submitHandler} className='flex flex-col w-full gap-2'>
              <div className='flex w-full gap-2'>
                <div className='w-1/2'>
                  <label className='block font-medium text-gray-700 text-md'>First Name</label>
                  <input
                    type='text'
                    placeholder='Enter your first name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                  />
                </div>
                <div className='w-1/2'>
                  <label className='block font-medium text-gray-700 text-md'>Last Name</label>
                  <input
                    type='text'
                    placeholder='Enter your last name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                  />
                </div>
                
              </div>
              <div className='flex items-center justify-between gap-2'>
              <div className='w-full'>
                <label className='block text-lg font-medium text-gray-700'>Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                >
                  <option value='farmer'>Farmer</option>
                  <option value='spoc'>SPOC</option>
                  <option value='powerplant'>Powerplant</option>
                </select>
              </div>
              <div className='w-full'>
                <label className='block font-medium text-gray-700 text-md'>Location</label>
                <input
                  type='text'
                  placeholder='Enter your location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                />
              </div>
              </div>
              <div className='flex items-center justify-between w-full '>
                <div className='flex flex-col w-full'>
                <label className='block font-medium text-gray-700 text-md'>Email</label>
                <div className='flex items-center justify-around w-full gap-2'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-[70%] px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                  />
                  <button
                    type='button'
                    onClick={sendOtp}
                    className='px-2 py-2 mt-1 text-md text-white bg-blue-500 w-[30%] rounded-xl hover:bg-blue-600'
                  >
                    Send OTP
                  </button>
                </div>
                </div>
              </div>
              <div className='flex items-center justify-center gap-2'>
              <div className='w-full'>
                <label className='block font-medium text-gray-700 text-md'>OTP</label>
                <input
                  type='text'
                  placeholder='Enter OTP'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                />
              </div>
              <div className='w-full'>
                <label className='block font-medium text-gray-700 text-md'>Phone</label>
                <input
                  type='text'
                  placeholder='Enter your phone number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                />
              </div>
              </div>
              <div className='w-full'>
                <label className='block text-lg font-medium text-gray-700'>Password</label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                />
              </div>
              <button
                type='submit'
                className='w-full px-4 py-2 text-lg font-semibold text-white transition duration-300 ease-in-out bg-green-500 shadow-md rounded-xl hover:bg-green-600'
              >
                Sign Up
              </button>
            </form>
            <p className='mt-4 text-sm text-gray-500'>Already have an account? <Link to='/login' className='text-blue-600 hover:underline'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
