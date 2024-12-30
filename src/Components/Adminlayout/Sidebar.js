import React from "react";
import JetImage from "../../assets/JET.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen, handleSidebarClick }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      >
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 inline-flex mt-1">
              <img
                className="mt-3 h-15 w-20"
                src={JetImage}
                alt="Flight Booking Logo"
              />
            </div>
            <div className="text-primary-foreground hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
              <h3 className="text-xl font-bold text-yellow-50">
                Flight Explore
              </h3>
            </div>
          </div>
        </div>

        <nav className="mt-10">
          <button
            onClick={() => {
              handleSidebarClick("booking"); 
              setSidebarOpen(false); 
            }}
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              ></path>
            </svg>
            <span className="mx-3">Booking Details</span>
          </button>
          {/* Other navigation links */}
          <button
            onClick={() => {
              handleSidebarClick("addFlight"); 
              setSidebarOpen(false); 
            }}
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="mx-3">Add Flights</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
