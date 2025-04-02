import React from 'react';
import { FaList, FaShoppingCart, FaCreditCard, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function PPCardSection() {
    return (
        <>
            <h2 className="text-5xl font-bold mt-6 mb-4 text-center pt-10">Dashboard Features</h2>
            <p className="text-center text-lg mb-6 px-44 text-gray-600">
                Access key functionalities for managing your orders, payments, and profile with ease. Navigate through the features below to streamline your experience.
            </p>
            <div className="px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20 pt-10">
                
                <div className="bg-green-100 shadow-lg rounded-2xl p-4 text-center">
                    <FaList className="text-green-700 text-4xl mb-4" />
                    <h3 className="text-xl font-bold">SPOC Listing</h3>
                    <p className="text-gray-600">View, organize, and manage SPOC listings effortlessly.</p>
                    <Link to={"/powerplant/spocs-listing"}>
                        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">View Listings</button>
                    </Link>
                </div>
    
                <div className="bg-yellow-100 shadow-lg rounded-2xl p-4 text-center">
                    <FaShoppingCart className="text-yellow-700 text-4xl mb-4" />
                    <h3 className="text-xl font-bold">My Orders</h3>
                    <p className="text-gray-600">Track and manage your orders seamlessly.</p>
                    <Link to={"/powerplant/my-orders"}>
                        <button className="mt-4 bg-yellow-700 text-white px-4 py-2 rounded">View Orders</button>
                    </Link>
                </div>
    
                <div className="bg-blue-100 shadow-lg rounded-2xl p-4 text-center">
                    <FaCreditCard className="text-blue-700 text-4xl mb-4" />
                    <h3 className="text-xl font-bold">Make Payment</h3>
                    <p className="text-gray-600">Proceed with your payments securely and conveniently.</p>
                    <Link to={"/powerplant/make-payment"}>
                        <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded">Pay Now</button>
                    </Link>
                </div>
    
                <div className="bg-purple-100 shadow-lg rounded-2xl p-4 text-center">
                    <FaUser className="text-purple-700 text-4xl mb-4" />
                    <h3 className="text-xl font-bold">Profile</h3>
                    <p className="text-gray-600">Manage your profile and account settings.</p>
                    <Link to={"/powerplant/profile"}>
                        <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded">View Profile</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PPCardSection;
