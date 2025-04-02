import React from 'react'

function OurServices() {
    return (
        <div className="bg-gray-100 py-12 px-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Our Services</h1>
            <p className="text-lg text-gray-700 text-center mx-auto">
                Grevion provides innovative solutions for SPOCs and power plants to facilitate seamless energy trading. Our services ensure efficiency, reliability, and sustainability in the energy market.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-200 p-6 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Secure Transactions</h2>
                    <p className="text-gray-700">Ensuring safe and transparent energy trading with secure payment gateways.</p>
                </div>
                
                <div className="bg-gray-300 p-6 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Real-Time Insights</h2>
                    <p className="text-gray-700">Providing live data analytics to help stakeholders make informed decisions.</p>
                </div>

                <div className="bg-gray-200 p-6 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Smart Matching</h2>
                    <p className="text-gray-700">Connecting SPOCs with the right power plants based on demand and supply.</p>
                </div>
            </div>
        </div>
    );
}


export default OurServices