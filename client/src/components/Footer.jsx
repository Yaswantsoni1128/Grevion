import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300 pt-10 pb-4">
      <div className="container mx-auto flex justify-around items-start ">
        <div className='w-[23%]'>
          <h2 className="text-4xl font-bold text-lime-300 mb-8">Grevion</h2>
          <p className="mt-2 text-gray-400 text-[1rem] pb-4">Grevion is a revolutionary platform that bridges the gap between SPOCs and power plants, offering a streamlined and efficient way to buy and sell paralis. Our mission is to simplify energy trading through innovative technology and trusted connections.</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="w-6 h-6 hover:text-lime-300 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-lime-300 cursor-pointer" />
            <FaLinkedin className="w-6 h-6 hover:text-lime-300 cursor-pointer" />
            <FaGlobe className="w-6 h-6 hover:text-lime-300 cursor-pointer" />
          </div>
        </div>

        <div>
            <h3 className="text-[1.1rem] font-semibold mb-6 pt-6">LINKS</h3>
            <ul className="mt-2 space-y-4">
                <li className=" cursor-pointer hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">About</li>
                <li className=" cursor-pointer hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Services</li>
                <li className=" cursor-pointer hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Blog</li>
                <li className=" cursor-pointer hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Contact</li>
            </ul>
        </div>

        <div>
          <h3 className="text-[1.1rem] font-semibold mb-6 pt-6">INFO</h3>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center space-x-2 text-lime-300"><FaMapMarkerAlt /> <span className='text-gray-300'>123 Energy Way, Green City</span></li>
            <li className="flex items-center space-x-2 text-lime-300"><FaPhone /> <span className='text-gray-300 cursor-pointer'>+1 (800) 123-4567</span></li>
            <li className="flex items-center space-x-2 text-lime-300"><FaEnvelope /> <span className='text-gray-300 cursor-pointer'>support@grevion.com</span></li>
          </ul>
        </div>

        <div className="md:col-span-3 mt-8">
          <h3 className="text-xl font-semibold">NEWSLETTER</h3>
          <p className="mt-2 text-gray-400 text-[1rem] pb-4">Sign up to get updates and news.</p>
          <div className="flex flex-col mt-2">
            <input type="text" placeholder="Email Address" className="py-2 px-4 mb-4 bg-[#0e362d] opacity-90 text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-400 mr-2 rounded-full" />
            <button className="bg-lime-300 text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:font-semibold hover:bg-lime-400">Subscribe Now</button>
          </div>
        </div>
      </div>
      <hr className='mt-10 text-green-900 opacity-20 mx-[5%]' />
      <div className="text-center mt-4 text-gray-500  ">© 2025 Grevion. All Rights Reserved.</div>
    </footer>
  );
}