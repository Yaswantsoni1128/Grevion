import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

function ParaliInfo() {
  const [paraliData, setParaliData] = useState({
    totalCollected: "500 Tons",
    pricePerTon: "\u20B92000",
    registeredFarmers: "120",
    pendingRequests: "15",
    lastUpdated: "March 2025",
  });

  return (
    <div className="bg-gray-50 border-2 border-gray-400 border-opacity-30 rounded-md p-6 w-1/4 max-w-2xl ml-20 pb-10 mb-20">
      <div className="flex justify-between items-center border-b border-gray-300 pb-4">
        <h2 className="text-lg font-semibold">Parali Collection Info</h2>
        <button className="flex items-center text-green-800 hover:text-green-600">
          <FaEdit className="mr-2" /> Edit
        </button>
      </div>
      <div className="grid gap-y-4 mt-4 text-gray-700">
        <div className="flex justify-between">
          <p className="text-md text-black font-semibold">Total Parali Collected:</p>
          <p>{paraliData.totalCollected}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-md text-black font-semibold">Price Per Ton:</p>
          <p>{paraliData.pricePerTon}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-md text-black font-semibold">Registered Farmers:</p>
          <p>{paraliData.registeredFarmers}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-md text-black font-semibold">Pending Requests:</p>
          <p>{paraliData.pendingRequests}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-md text-black font-semibold">Last Updated:</p>
          <p>{paraliData.lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}

export default ParaliInfo;
