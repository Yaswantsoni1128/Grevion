import React from 'react'

function AboutUsPage() {
    return (
        <div className="bg-white py-12 px-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">About <span className='text-green-700'>Grevion</span></h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
                Grevion connects SPOCs with power plants, streamlining the buying and selling of <span className="text-gray-600 font-semibold">paralis</span> for efficient energy trading.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
                    <p className="text-gray-800">
                        To build a sustainable marketplace for energy resources, facilitating better communication and smarter decision-making.
                    </p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
                    <p className="text-gray-800">
                        A world where renewable energy sources are traded effortlessly, ensuring sustainability and economic growth.
                    </p>
                </div>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Why Choose Grevion?</h2>
                <ul className="list-disc list-inside text-gray-800 text-left md:text-center">
                    <li className='list-none'>Secure transactions</li>
                    <li className='list-none'>Real-time data insights</li>
                    <li className='list-none'>Trusted by professionals</li>
                    <li className='list-none'>Eco-friendly approach</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUsPage;