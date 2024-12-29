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
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
          <input
            className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
            type="text"
            placeholder="Search"
          />
        </div>
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
