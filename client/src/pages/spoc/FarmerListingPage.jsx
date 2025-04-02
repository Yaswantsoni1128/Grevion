import React, { useEffect, useState } from "react";
import axios from "axios";

const FarmerListingPage = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalParali , setTotalParali] = useState("")

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming you store JWT in localStorage
        const response = await axios.get("http://localhost:8000/api/v1/spoc/getAllFarmers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data.farmers);
        
        if (response.data.success) {
          setFarmers(response.data.farmers);
        } else {
          setError("Failed to fetch farmers");
        }
      } catch (error) {
        console.error(error)
        setError("Error fetching farmers");
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  useEffect(() => {
    if (farmers.length > 0) {
      const total = farmers.reduce((sum, farmer) => sum + (farmer.totalParali || 0), 0);
      setTotalParali(total);
    }
  }, [farmers]);
  

  return (
    <div className="min-h-screen p-10 flex flex-col items-center relative">
      <h2 className="px-4 py-2 absolute top-10 right-0 text-2xl font-semibold">Total Parali Collected: {totalParali} Kg</h2>
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Farmer Listing</h2>
      <div className="w-full overflow-x-auto bg-white shadow-2xl rounded-xl p-6">
        {loading ? (
          <p className="text-center text-gray-600 font-semibold">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : (
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-green-800 text-white text-lg">
              <tr>
                <th className="py-4 px-20 text-left">Name</th>
                <th className="py-4 px-20 text-left">Village</th>
                <th className="py-4 px-20 text-left">Email</th>
                <th className="py-4 px-20 text-left">Total Parali</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-lg">
              {farmers.length > 0 ? (
                farmers.map((farmer, index) => (
                  <tr key={index} className="border-b hover:bg-green-100 transition-all duration-300">
                    <td className="py-4 px-20 font-semibold">{farmer.name}</td>
                    <td className="py-4 px-20">{farmer.village}</td>
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
        )}
      </div>
    </div>
  );
};

export default FarmerListingPage;
