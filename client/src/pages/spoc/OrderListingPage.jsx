import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderRequests = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      
  const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8000/api/v1/spoc/getAllRequests",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.requests);
      if (response.data.success) {
        setOrders(response.data.requests || []);
      } else {
        setOrders([]);
        toast.error(response.data.message || "Failed to fetch orders.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (id) => {
    try {
      
  const token = localStorage.getItem("token");
      await axios.post(`http://localhost:8000/api/v1/spoc/acceptRequest/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Order Accepted!");
      fetchOrders();
    } catch (error) {
      console.error("Error accepting order:", error);
      toast.error("Failed to accept order.");
    }
  };

  const handleDecline = async (reqid) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token); // Debugging
  
      const response = await axios.post(
        `http://localhost:8000/api/v1/spoc/declineRequest/${reqid}`, 
        {},  // Send empty body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Decline response:", response.data); // Debugging
      toast.warn("Order Declined.");
      fetchOrders();
    } catch (error) {
      console.error("Error declining order:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Failed to decline order.");
    }
  };
  
  
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Order Requests
        </h2>

        {loading ? (
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 border-t-4 border-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="grid gap-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="p-4 bg-white rounded-lg shadow-md"
              >
                <p className="text-lg font-semibold text-gray-700">
                  <strong>PowerPlant:</strong> {order.name}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {order.location}
                </p>
                <p className="text-gray-600">
                  <strong>Price offered per ton:</strong>{" "}
                  {order.offeredPricePerTon}₹
                </p>
                <p className="text-gray-600">
                  <strong>Requested Parali:</strong> {order.requestedParali} ton
                </p>
                <p className="text-gray-600">
                  <strong>Total Price:</strong> {order.totalPrice}₹
                </p>
                <p className="text-gray-600">
                  <strong>Message:</strong> {order.message}
                </p>
                <p className="text-gray-600">
                  <strong>Accept order Within:</strong> {order.deliverWithin}
                  days
                </p>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleAccept(order._id)}
                    className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                  >
                    ✅ Accept
                  </button>
                  <button
                    onClick={() => handleDecline(order._id)}
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    ❌ Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default OrderRequests;
