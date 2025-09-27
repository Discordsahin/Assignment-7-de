// src/components/Navbar.jsx
import React from "react";

export default function Navbar({ onNew }) {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-indigo-600 font-semibold text-lg"> CS-Customer Support Zone</div>

         
        </div>

        <div className="flex items-center gap-4">
           <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Home</span>
            <span className="hover:text-gray-900 cursor-pointer">FAQ</span>
             <span className="hover:text-gray-900 cursor-pointer">Changelog</span>
              <span className="hover:text-gray-900 cursor-pointer">Blog</span>
               <span className="hover:text-gray-900 cursor-pointer">Download</span>
            <span className="hover:text-gray-900 cursor-pointer">Contact</span>
          </nav>
          <div className="flex items-center gap-3">
            <img src="../assets/image.png" alt="" />
            <button
            onClick={onNew}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow"
          >
            New Ticket
          </button>

          </div>
          
        </div>
      </div>
    </header>
  );
}
