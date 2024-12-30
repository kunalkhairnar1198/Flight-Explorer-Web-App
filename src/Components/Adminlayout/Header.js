import React from "react";
import { useNavigate } from "react-router";

const Header = ({ setSidebarOpen }) => {
  const navigate = useNavigate()
  const profileName = JSON.parse(localStorage.getItem('loggedInUser'))

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
    alert("You have been logged out due to inactivity.");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex items-center">
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            onClick={logoutHandler}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-2 rounded-md text-sm font-medium"
          >
            logout
          </button>
        </div>
        <div className="relative">
          <button className="relative block w-8 h-8 overflow-hidden bg-red-500 rounded-full shadow focus:outline-none">
           {profileName.name}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
