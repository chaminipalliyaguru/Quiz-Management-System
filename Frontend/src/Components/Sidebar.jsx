import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="h-screen w-60 bg-gradient-to-b from-blue-700 to-blue-500 text-white shadow-xl fixed">
      <div className="p-6 text-center font-bold text-2xl tracking-wide border-b border-white/20">
        Admin Panel
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <Link
          to="/admin"
          className="px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-200 font-medium"
        >
          Dashboard
        </Link>
        <Link
          to="/subject"
          className="px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-200 font-medium"
        >
          Subject
        </Link>
        <Link
          to="/quiz"
          className="px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-200 font-medium"
        >
          Quiz
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
