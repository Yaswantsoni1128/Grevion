import React from 'react'
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

function SpocPersonalInfo() {
    const [user, setUser] = useState({
        fullname: "Srish yaswant",
        email: "sriya@gmail.com",
        phone: "1234567890",
        bio: "As a SPOC at Grevion, I bridge the gap between farmers and stakeholders, ensuring smooth communication and efficient support. ",
        village: "Greenwood Village"
      });
    
      return (
        <div className="bg-white border-2 border-gray-400 border-opacity-30 rounded-md p-6 mr-20 pb-10 mb-20">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <button className="flex items-center  text-green-800 hover:text-green-600">
              <FaEdit className="mr-2" /> Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-4 mt-4 text-gray-700">
            <div className="col-span-2">
              <p className="text-md text-black font-semibold">Full Name</p>
              <p className="pl-1">{user.fullname}</p>
            </div>
            <div>
              <p className="text-md text-black font-semibold">Email Address</p>
              <p className=" cursor-pointer">{user.email}</p>
            </div>
            <div>
              <p className="text-md text-black font-semibold">Phone</p>
              <p className="font-medium">{user.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-md text-black font-semibold">Bio</p>
              <p>{user.bio}</p>
            </div>
            <div className="col-span-2">
              <p className="text-md text-black font-semibold">Village</p>
              <p className="">{user.village}</p>
            </div>
          </div>
        </div>
      );
    }
    
export default SpocPersonalInfo