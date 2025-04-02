import React, { useEffect, useState } from "react";
import axios from "axios";

const SpocListingPage = () => {
  const [spocs, setSpocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [orderStatus, setOrderStatus] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    requestedParali: "",
    offeredPricePerTon: "",
    totalPrice: "",
    deliverWithin: "",
    location: "",
    message: "",
  });
  const [selectedSpocId, setSelectedSpocId] = useState(null);

  useEffect(() => {
    const fetchSpocs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/api/v1/powerplant/getAllSpoc", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.success) {
          setSpocs(response.data.spocs);
        } else {
          setError("Failed to fetch spocs");
        }
      } catch (error) {
        console.error(error);
        setError("Error fetching spocs");
      } finally {
        setLoading(false);
      }
    };
    fetchSpocs();
  }, []);

  const handleOrderClick = ( spocId) => {
    setSelectedSpocId(spocId);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`http://localhost:8000/api/v1/powerplant/placeOrder/${selectedSpocId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrderStatus((prevStatus) => ({
        ...prevStatus,
        [selectedSpocId]: "Order Placed",
      }));
      setShowModal(false);
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen p-10">
      <h2 className="mb-6 text-4xl font-extrabold text-gray-800">Spoc Listing</h2>
      <div className="w-full p-6 overflow-x-auto bg-white shadow-2xl rounded-xl">
        {loading ? (
          <p className="font-semibold text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="font-semibold text-center text-red-600">{error}</p>
        ) : (
          <table className="w-full border-collapse rounded-lg">
            <thead className="text-lg text-white bg-green-800">
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Total Parali</th>
                <th>Available</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-lg text-gray-700">
              {spocs.map((spoc) => (
                <tr key={spoc._id} className="border-b hover:bg-green-100">
                  <td className="px-4 py-1 text-center">{spoc.name}</td>
                  <td className="px-4 py-1 text-center">{spoc.location}</td>
                  <td className="px-4 py-1 text-center">{spoc.totalParaliCollected} kg</td>
                  <td className="px-4 py-1 text-center ">{spoc.availableForSale && spoc.totalParaliCollected>0 ? "Yes" : "No"}</td>
                  <td className="px-4 py-1 text-center">
                    {spoc.availableForSale ? (
                      <button
                        onClick={() => handleOrderClick( spoc._id)}
                        className={`px-4 py-2 rounded ${orderStatus[spoc._id] ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                        disabled={orderStatus[spoc._id]}
                      >
                        {orderStatus[spoc._id] || "Place Order"}
                      </button>
                    ) : (
                      <span className="text-red-600">Not Available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 className="mb-4 text-xl font-bold">Place Order</h2>
            <input type="text" name="requestedParali" placeholder="Requested Parali" className="w-full p-2 mb-2 border rounded" onChange={handleChange} />
            <input type="text" name="offeredPricePerTon" placeholder="Offered Price per Ton" className="w-full p-2 mb-2 border rounded" onChange={handleChange} />
            <input type="text" name="totalPrice" placeholder="Total Price" className="w-full p-2 mb-2 border rounded" onChange={handleChange} />
            <input type="text" name="deliverWithin" placeholder="Deliver Within" className="w-full p-2 mb-2 border rounded" onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" className="w-full p-2 mb-2 border rounded" onChange={handleChange} />
            <textarea name="message" placeholder="Message" className="w-full p-2 mb-2 border rounded" onChange={handleChange}></textarea>
            <div className="flex justify-end">
              <button className="px-4 py-2 mr-2 text-white bg-gray-400 rounded" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="px-4 py-2 text-white bg-blue-600 rounded" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpocListingPage;
