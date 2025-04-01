import React from "react";

const FarmerListingPage = () => {
  // Static JSON data for farmers
  const farmers = [
    { name: "Rajesh Kumar", phone: "9876543210", email: "rajesh@example.com", totalParali: 50 },
    { name: "Suresh Yadav", phone: "9876543211", email: "suresh@example.com", totalParali: 75 },
    { name: "Anita Sharma", phone: "9876543212", email: "anita@example.com", totalParali: 30 },
    { name: "Vikram Singh", phone: "9876543213", email: "vikram@example.com", totalParali: 100 },
  ];

  return (
    <div className="min-h-screen  p-10 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Farmer Listing</h2>
      <div className="w-full overflow-x-auto bg-white shadow-2xl rounded-xl p-6">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-green-800 text-white text-lg">
            <tr>
              <th className="py-4 px-20 text-left">Name</th>
              <th className="py-4 px-20 text-left">Phone</th>
              <th className="py-4 px-20 text-left">Email</th>
              <th className="py-4 px-20 text-left">Total Parali</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-lg">
            {farmers.length > 0 ? (
              farmers.map((farmer, index) => (
                <tr key={index} className="border-b hover:bg-green-100 transition-all duration-300">
                  <td className="py-4 px-20 font-semibold">{farmer.name}</td>
                  <td className="py-4 px-20">{farmer.phone}</td>
                  <td className="py-4 px-20">{farmer.email}</td>
                  <td className="py-4 px-20 text-center font-bold">{farmer.totalParali} kg</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-600 font-semibold">No farmers available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FarmerListingPage;