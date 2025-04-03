import React, { useEffect, useState } from "react";
import axios from "axios";
import ordersImg from "../../assets/orders.jpg";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Error: Authentication token not found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/powerplant/getAllOrders`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Response Data:", response.data);
        setOrders(
          Array.isArray(response.data.orders) ? response.data.orders : []
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          console.error("Response error data:", error.response.data);
          setError(
            `Error: ${error.response.status} - ${
              error.response.data.message || "Something went wrong"
            }`
          );
        } else if (error.request) {
          console.error("Request error:", error.request);
          setError("Error: No response from server");
        } else {
          console.error("Error", error.message);
          setError(`Error: ${error.message}`);
        }
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center bg-gray-100">
      <div className="relative w-full">
        <img
          src={ordersImg}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover brightness-75"
          alt="Orders"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center uppercase">
          My Orders
        </h1>
      </div>

      {loading ? (
        <p className="text-lg font-semibold text-gray-600">Loading orders...</p>
      ) : error ? (
        <p className="text-lg font-semibold text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {orders.length === 0 ? (
            <p className="text-lg font-semibold text-gray-600">
              No orders found.
            </p>
          ) : (
            orders.map((order) => (
              <div
                key={order._id}
                className="relative w-80 transform transition duration-300 hover:scale-105"
              >
                {/* Order Name Button Outside the Clipped Div */}
                <button className="bg-green-800 text-white rounded-xl p-1 w-[5.5rem] absolute -top-1 -left-1 shadow-lg text-md">
                  {order.name}
                </button>

                {/* Clipped Order Card */}
                <div
                  className="relative flex flex-col gap-1 justify-center bg-white rounded-xl p-6 w-80 h-56 "
                  style={{
                    clipPath:
                      "polygon(24% 15%, 35% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
                  }}
                >
                  <h3 className="text-md mt-4 text-gray-700">
                    <strong>Order ID: </strong>
                    <span className="text-sm font-normal p-1 rounded-xl text-gray-700">
                      {order._id}
                    </span>
                  </h3>
                  <p className="text-md text-gray-700">
                    <strong>Requested Parali:</strong> {order.requestedParali}{" "}
                    tons
                  </p>
                  <p className="text-md text-gray-700">
                    <strong>Total Price:</strong> ₹{order.totalPrice}
                  </p>
                  <p className="text-md text-gray-700">
                    <strong>Deliver Within:</strong> {order.deliverWithin} days
                  </p>
                  <p className="text-md text-gray-700">
                    <strong>Location:</strong> {order.location}
                  </p>
                  <p
                    className={`text-md font-bold ${
                      order.status === "pending"
                        ? "text-yellow-600"
                        : order.status === "accepted"
                        ? "text-lime-600"
                        : "text-red-600"
                    }`}
                  >
                    <strong>Status:</strong> {order.status}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
