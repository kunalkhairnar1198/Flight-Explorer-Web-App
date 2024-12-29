import React from "react";
import { NavLink, useNavigate } from "react-router";
import useInactive from "../../Hook/useInactive";
import JetImage from '../../assets/JET.png'
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../../Reduxstore/Ui-slice/ui-slice";

const Mainnavigation = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const isOpenMobileView = useSelector(state => state.ui.isMobOpen)
  const profileName = JSON.parse(localStorage.getItem('loggedInUser'))
  console.log(profileName.name)


  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
    alert("You have been logged out due to inactivity.");
  };

  //for inactive session close
  // useInactive(logoutHandler ,10000)

  return (
    <>
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                className="mt-1 h-15 w-20"
                src={JetImage}
                alt="Flight Booking Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="text-primary-foreground hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                 <h3 className="text-xl font-bold text-gray-800">Flight Explore</h3>
              </div>   
              <NavLink className="text-primary-foreground hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                Home
              </NavLink>
              <NavLink className="text-muted-foreground hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                About
              </NavLink>
              <NavLink className="text-muted-foreground hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={logoutHandler}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-2 rounded-md text-sm font-medium"
            >
              logout
            </button>
            <button className="ml-4 bg-accent text-accent-foreground hover:bg-accent/80 px-3 py-2 rounded-md text-sm font-medium">
              {profileName.name}
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-background inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              undefinedcontrols="mobile-menu"
              undefinedexpanded="false"
              onClick={()=>(dispatch(UiActions.isOpenMobileHanlde()))}
            >
              <span className="sr-only">Open main menu</span>
              <img
                undefinedhidden="true"
                alt="menu"
                src="https://openui.fly.dev/openui/24x24.svg?text=☰"
              />
            </button>
          </div>
        </div>
      </div>
      {isOpenMobileView && (
        <div className="sm:hidden" id="mobile-menu">
          
          <div className="pt-2 pb-3 space-y-1">
             <div className="text-primary-foreground hover:text-primary inline-flex mt-5 items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                 <h3 className="text-xl font-bold text-gray-800">Flight Explore</h3>
              </div>  
            <NavLink className="bg-primary text-primary-foreground block pl-3 pr-4 py-2 border-l-4 border-primary text-base font-medium">
              Home
            </NavLink>
            <NavLink className="text-muted-foreground hover:bg-muted hover:text-primary block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              About
            </NavLink>
            <NavLink className="text-muted-foreground hover:bg-muted hover:text-primary block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              Contact
            </NavLink>
            <NavLink className="text-muted-foreground hover:bg-muted hover:text-primary block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              Login
            </NavLink>
            <NavLink className="text-muted-foreground hover:bg-muted hover:text-primary block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              Profile
            </NavLink>
          </div>
        </div>
      )}

    </nav>
    {props.children}
    </>
  );
};

export default Mainnavigation;
