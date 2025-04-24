import React from "react";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto ml-60">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-700 mb-8">Dashboard</h1>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-yellow-200 p-6 rounded-2xl text-center shadow-md hover:scale-105 transition">
            <div className="text-gray-800 text-lg font-semibold">Subjects</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">10</div>
          </div>
          <div className="bg-green-300 p-6 rounded-2xl text-center shadow-md hover:scale-105 transition">
            <div className="text-gray-800 text-lg font-semibold">Members</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">20</div>
          </div>
          <div className="bg-cyan-200 p-6 rounded-2xl text-center shadow-md hover:scale-105 transition">
            <div className="text-gray-800 text-lg font-semibold">Participants</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">10</div>
          </div>
          <div className="bg-pink-300 p-6 rounded-2xl text-center shadow-md hover:scale-105 transition">
            <div className="text-gray-800 text-lg font-semibold">Quizzes</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">20</div>
          </div>
        </div>

        {/* Add Quiz Button */}
        <div className="text-center mt-16">
          <Link to="/quiz">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition">
              + Add Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
