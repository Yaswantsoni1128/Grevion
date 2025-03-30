import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("farmer");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-green-100 to-blue-100'>
      {/* Main content */}
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='flex items-center justify-center w-full h-[90%] '>
        <div className='items-center justify-center hidden w-1/3 h-full px-10 py-2 bg-white shadow-xl rounded-l-xl lg:flex'>
          <img src="./login_gif.gif" alt="" className='rounded-xl' />
        </div>
        <div className='flex flex-col items-center w-full h-full px-10 py-3 bg-white shadow-r-xl md:w-1/3 rounded-r-xl'>
          {/* <img src='./parali.jpg' alt='Logo' className='w-24 h-24 mb-5 rounded-full shadow-md' /> */}
          <h2 className='mb-4 text-3xl font-bold text-gray-700'>Create Account</h2>
          
          <form onSubmit={submitHandler} className='flex flex-col w-full gap-2'>
          <div className='w-full'>
              <label className='block text-lg font-medium text-gray-700'>SignUp As</label>
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
              <label className='block text-lg font-medium text-gray-700'>Full Name</label>
              <input
                type='text'
                placeholder='Enter your full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
              />
            </div>
            <div className='w-full'>
              <label className='block text-lg font-medium text-gray-700'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
              />
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
            
            <div className='w-full'>
              <label className='block text-lg font-medium text-gray-700'>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          <p className='mt-4 text-sm text-gray-500'>Already have an account? <a href='/login' className='text-blue-600 hover:underline'><Link to={"/login"}>Login </Link></a></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
