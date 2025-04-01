import React from "react";

const OrderListingPage = () => {
  // Sample static order data
  const orders = [
    { id: 1, farmerName: "Ramesh Kumar", village: "Lakhanpur", quantity: "500 Kg", status: "Pending" },
    { id: 2, farmerName: "Suresh Yadav", village: "Basantpur", quantity: "300 Kg", status: "Pending" },
    { id: 3, farmerName: "Anil Sharma", village: "Rajgarh", quantity: "450 Kg", status: "Pending" },
  ];

  return (
    <div className="min-h-screen p-10 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Order Requests</h2>
      <div className="w-full overflow-x-auto bg-white shadow-2xl rounded-xl p-6">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-green-800 text-white text-lg">
            <tr>
              <th className="py-4 px-6 text-left">Farmer Name</th>
              <th className="py-4 px-6 text-left">Village</th>
              <th className="py-4 px-6 text-left">Quantity</th>
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-lg">
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-green-100 transition-all duration-300">
                <td className="py-4 px-6 font-semibold">{order.farmerName}</td>
                <td className="py-4 px-6">{order.village}</td>
                <td className="py-4 px-6">{order.quantity}</td>
                <td className="py-4 px-6 font-bold">{order.status}</td>
                <td className="py-4 px-6 flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Accept</button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderListingPage;