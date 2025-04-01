import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Comp3 = () => {
  return (
    <div className="p-8 pt-16 pb-16 bg-white min-h-screen">
        <div className="flex justify-around items-start">
            <h2 className="text-4xl font-bold mb-4">Sustainability through Paralis</h2>
            <p className="text-gray-600 mb-8">Grevion empowers sustainable energy practices by connecting SPOCs and power plants for efficient trading of Paralis.</p>
        </div>

        {/* image  */}
        <div className="relative mt-10">
            <div className="relative w-[90vw] mx-auto">
                      <img
                        src="https://img.freepik.com/free-photo/natural-landscape-with-green-grass-field-golden-ripe-wheat-ai-generated-image_587448-1493.jpg?t=st=1743500042~exp=1743503642~hmac=1e0dd20e82c7ac7049d22a9db7355bb61e7c13170a280adb0b602d6819991d22&w=1380"
                        alt="Energy Trading Visualization"
                        className="w-full h-[550px] object-cover rounded-md"
                        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 43%, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 10%, 13% 10%)" }}
                      />
                      <button className="absolute top-0 left-0 bg-green-950 text-white px-4 py-2 rounded-full font-normal shadow-md hover:bg-green-900 text-[1.2rem]">
                        Know More
                      </button>
                      <Link to={"/landingPage/sustainability"}>
                        <button className="absolute top-0 left-[8.6rem] hover:bg-green-950 hover:text-white text-black border border-green-950 rounded-full font-medium hover:font-semibold bg-opacity-25  p-[0.7rem] text-[1.2rem] shadow-md">
                            <FaArrowRight/>
                        </button>
                      </Link>
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 px-20">
        <div className="bg-white p-6 text-center border-b-2 border-lime-300">
          <h3 className="text-3xl font-semibold mb-2 tracking-tighter">Efficient Energy Trading</h3>
          <p className="text-gray-600">Streamline transactions between SPOCs and power plants, reducing energy waste and optimizing resource utilization.</p>
        </div>

        <div className="bg-white p-6 text-center border-b-4 border-lime-300">
          <h3 className="text-3xl font-semibold mb-2 tracking-tighter">Transparent Transactions</h3>
          <p className="text-gray-600">Achieve complete transparency in energy trading with clear and detailed transaction records.</p>
        </div>

        <div className="bg-white p-6 text-center border-b-2 border-lime-300">
          <h3 className="text-3xl font-semibold mb-2 tracking-tighter">Innovation in Energy Management</h3>
          <p className="text-gray-600">Utilize modern technology to enhance energy distribution and management through Grevion's platform.</p>
        </div>
      </div>

    </div>
  );
};

export default Comp3;
