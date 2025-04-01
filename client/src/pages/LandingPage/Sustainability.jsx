import React from "react";

function Sustainability() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Sustainability & Parali Management</h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          The improper handling of <span className="font-semibold text-gray-900">parali</span> (crop residue) has led to severe environmental
          issues, including hazardous air pollution. By enabling a structured and sustainable
          marketplace for parali sales, <span className="font-semibold text-gray-900">Grevion</span> aims to reduce pollution,
          promote responsible disposal, and encourage eco-friendly utilization.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Delhi Pollution Crisis</h3>
          <p className="text-gray-700">
            Stubble burning in neighboring states has been a major contributor to the
            hazardous air quality in Delhi, affecting millions every year. Our platform
            provides a sustainable alternative by facilitating responsible parali trade.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Unutilized Biomass Waste</h3>
          <p className="text-gray-700">
            Millions of tons of parali go to waste or are burnt, contributing to global
            warming. By selling parali for biofuel or other sustainable applications,
            farmers can turn waste into wealth.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly Solutions</h3>
          <p className="text-gray-700">
            Grevion connects suppliers with industries that can repurpose parali into
            bioenergy, paper, and organic fertilizers, reducing environmental impact
            and fostering green innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;