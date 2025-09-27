// src/components/Banner.jsx
import React from "react";
import vector1 from "../assets/vector1.png";

export default function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* In-Progress Card */}
        <div className="relative rounded-2xl h-[250px] bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg overflow-hidden">
          {/* Background Pattern - More Visible */}
          <div className="absolute inset-0 opacity-30 ">
            <div
              className="absolute top-0 left-0 w-full h-full bg-repeat"
              style={{
                backgroundImage: `url(${vector1})`,
                
              }}
            ></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full  bg-opacity-10"></div>
          <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full  bg-opacity-10"></div>

          {/* Centered Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider opacity-90">
                In-Progress
              </div>
              <div className="text-5xl font-bold mt-2">{inProgressCount}</div>
            </div>
          </div>

          {/* Badge at Bottom Right */}
          <div className="absolute bottom-4 right-4 z-10"></div>
        </div>

        {/* Resolved Card */}
        <div className="relative rounded-2xl h-[250px] bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg ">
          {/* Background Pattern - More Visible */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute top-0 left-0 w-full h-full bg-repeat"
              style={{
                backgroundImage: `url(${vector1}`,
               
                
              }}
            ></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full  bg-opacity-10"></div>
          <div className="absolute -top-8 -left-8 w-20 h-20 rounded-fullbg-opacity-10"></div>

          {/* Centered Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider opacity-90">
                Resolved
              </div>
              <div className="text-5xl font-bold mt-2">{resolvedCount}</div>
            </div>
          </div>

          {/* Badge at Bottom Right */}
          <div className="absolute bottom-4 right-4 z-10"></div>
        </div>
      </div>
    </div>
  );
}
