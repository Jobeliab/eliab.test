import React from "react";
import { Bell } from "lucide-react";

const Hero = () => (
  <div className="bg-blue-700 text-white shadow">
    <div className="mx-auto px-4 py-6">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Bungoma County E-Tendering</h1>
          <p className="mt-1 text-blue-100">
            Transparent, Efficient & Digital Procurement
          </p>
        </div>
        <div className="flex space-x-4 my-5">
          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center">
            <Bell className="mr-2 w-5 h-5" />
            Notifications
          </button>
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg">
            Login / Register
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
