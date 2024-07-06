import React from "react";
import { Link } from "react-router-dom";
import solarPanelImg from '../../assets/images/solar2.png';
import sun from '../../assets/images/sun3.png';



const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 to-blue-200">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className=" font-bold p-4 text-xl">Solar Power Monitoring</span>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-green-600 mb-4">
              EASY & SAFE
            </h1>
            <h2 className="text-4xl font-bold text-green-600 mb-6">
              Solar Monitoring With S Power
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              Creating An Even Better Future For Everyone. At S POWER, We Are
              Building A Seemless Accessabilty Platform Of The Future.
            </p>
            <p className="text-xl text-gray-600 mb-4">Get Started:</p>

            <div className="flex space-x-4">
              <button className="flex items-center bg-black text-white px-4 py-2 rounded-md">
              <Link to="/login" className="mr-4">Login</Link>
              </button>
              <button className="flex items-center bg-black text-white px-4 py-2 rounded-md">
              <Link to="/signup" className="mr-4">Signup</Link>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src={solarPanelImg} alt="Solar Panel" 
              className="rounded-lg"
            />
          </div>
        </div>
      </main>

      <div className="absolute top-20 right-20">
        <div className="w-40 h-40 rounded-full">
        <img
              src={sun} alt="Solar Panel" 
              className="rounded-lg"
            />
        </div>
      </div>

    </div>
  );
};

export default Welcome;
