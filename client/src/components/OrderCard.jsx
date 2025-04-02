import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div
      className="relative flex flex-col gap-1 justify-center bg-gray-100 shadow-lg border border-lime-300 rounded-lg p-6 w-[350px] h-[210px]  -ml-[18.8rem] mb-12"
      style={{
        clipPath: "polygon(24% 15%, 35% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
      }}
    >
      <h3 className="text-md  text-gray-800 mt-6">
        <strong>Order ID:</strong> <span className="text-sm font-normal text-gray-700 ">{order._id}</span>
      </h3>
      <p className="text-md text-gray-700">
        <strong>Requested Parali:</strong> {order.requestedParali} tons
      </p>
      <p className="text-md text-gray-700">
        <strong>Total Price:</strong> ₹{order.totalPrice}
      </p>
      <p className="text-md text-gray-700">
        <strong>Deliver Within:</strong> {order.deliverWithin} days
      </p>
      <p className="text-md text-gray-700 ">
        <strong>Location:</strong> {order.location}
      </p>
      <p
        className={`text-md font-bold ${
          order.status === "pending"
            ? "text-yellow-600"
            : order.status === "approved"
            ? "text-lime-600"
            : "text-red-600"
        }`}
      >
        <strong>Status:</strong> {order.status}
      </p>
    </div>
  );
};

export default OrderCard;
