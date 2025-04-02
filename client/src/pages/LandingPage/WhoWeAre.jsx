import React from "react";

function WhoWeAre() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are?</h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          <span className="font-semibold text-gray-900">Grevion</span> is a web platform that connects
          SPOCs (Single Point of Contact) and power plants to facilitate the buying and
          selling of <span className="font-semibold text-gray-900">paralis</span>. It streamlines energy trading by providing
          a reliable and efficient way to establish connections and manage transactions.
          The platform emphasizes innovation and trust, making energy trading more accessible
          and organized.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-10">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To revolutionize energy trading by fostering seamless connections and efficient
            transactions between SPOCs and power plants.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To provide a trusted and innovative platform that simplifies and optimizes the
            buying and selling of paralis, ensuring a transparent and efficient trading ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
