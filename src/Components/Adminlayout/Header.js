import { useNavigate } from 'react-router';

import useInactive from '../../Hook/useInactive';

function Header({ setSidebarOpen }) {
  const navigate = useNavigate();
  const profileName = JSON.parse(localStorage.getItem('loggedInUser'));

  const logoutHandler = () => {
    localStorage.clear();
    navigate('/');
    // alert('You have been logged out due to inactivity.');
  };

  useInactive(logoutHandler, 50000);

  return (
    <header className="flex items-center  justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center ">
        <button className="text-gray-500 focus:outline-none" type="button" onClick={() => setSidebarOpen(true)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center">
        <div className="sm:ml-6 sm:flex sm:items-center">
          <button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-2 rounded-md text-sm font-medium"
            type="button"
            onClick={logoutHandler}
          >
            logout
          </button>
        </div>

        <div className="relative">
          <button
            className="relative block w-8 h-8 overflow-hidden bg-red-500 rounded-full shadow focus:outline-none"
            type="button"
          >
            {profileName.name}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
