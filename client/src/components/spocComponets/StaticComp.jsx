import React from 'react'
import { FaUserPlus, FaClipboardList, FaEnvelopeOpenText, FaUserCircle, FaChartBar } from "react-icons/fa";
import { useEffect, useState } from "react";

function StaticComp() {
    const stats = [
        { label: "Total Farmers", value: 152, color: "text-green-700" },
        { label: "Pending Requests", value: 23, color: "text-yellow-700" },
        { label: "Recieved Requests", value: 87, color: "text-blue-700" },
      ];
    
      const [counts, setCounts] = useState(stats.map(() => 0));
    
      useEffect(() => {
        stats.reduce((prevPromise, stat, index) => {
          return prevPromise.then(() => {
            return new Promise((resolve) => {
              let count = 0;
              const interval = setInterval(() => {
                count++;
                setCounts((prevCounts) => {
                  const newCounts = [...prevCounts];
                  newCounts[index] = count;
                  return newCounts;
                });
                if (count === stat.value) {
                  clearInterval(interval);
                  resolve();
                }
              }, 20);
            });
          });
        }, Promise.resolve());
      }, []);
    
      return (
        <div className="bg-gray-100 p-4 text-center col-span-1 md:col-span-2 lg:col-span-4 py-8">
          
          <h3 className="text-5xl font-bold flex justify-center items-center gap-2 mb-8"> 
            <FaChartBar className="text-gray-700" />
            <p>Statistics Overview</p>
          </h3>
          <div className="flex justify-around mt-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <h4 className="text-2xl font-semibold">{stat.label}</h4>
                <p className={`text-3xl font-bold ${stat.color}`}>{counts[index]}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
export default StaticComp