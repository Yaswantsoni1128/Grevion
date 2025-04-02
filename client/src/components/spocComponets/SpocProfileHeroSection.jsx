import React from 'react'

function SpocProfileHeroSection() {
    return (
        <div className="relative w-full h-[60vh] overflow-x-hidden overflow-y-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center mb-52"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/panoramic-view-wild-animals-south-africa_181624-37596.jpg?t=st=1743585165~exp=1743588765~hmac=e03cf39067c3ff79cd7921d25428962f34556487982ebad8d9b0e53206683f03&w=1380')" }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute inset-0"></div>
          
          {/* Profile Content */}
            <div className="relative top-8 left-20 z-10 flex flex-col items-start justify-center h-full text-white px-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="SPOC Profile"
              className="w-32 h-32 md:h-52 md:w-52 rounded-full border-4 border-white shadow-lg"
            />
            </div>


            <div className="relative bottom-52 left-80">
                <h1 className="text-2xl md:text-3xl font-bold mt-4">Snehaaa</h1>
                <p className="text-lg md:text-xl">Single Point of Contact (SPOC)</p>
                <div className="flex space-x-4 text-sm md:text-base mt-2">
                {/* <span className="opacity-80">Saint-Petersburg, Russia</span> */}
                </div>
            </div>
        </div>
      );
    }
    

export default SpocProfileHeroSection