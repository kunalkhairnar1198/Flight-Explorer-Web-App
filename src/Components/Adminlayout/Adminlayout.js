import React, {  useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AdminCard from "../AdminFlightDetail/AdminCard";
import AdminTable from "../../Pages/Admin/AdminTable";
import FlightInput from "../../Pages/Admin/FlightInput";
import { useSelector } from "react-redux";

const AdminLayout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('booking'); 
  const isState = useSelector(state => state.ui.isOpen)
  const handleSidebarClick = (component) => {
    setActiveComponent(component);
  };


  return (
    <>
    <div className="flex h-screen bg-gray-200">
      {isState && <FlightInput/>}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} handleSidebarClick={handleSidebarClick} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <div className="flex flex-wrap-mx-6">
                <AdminCard />
              </div>
          <AdminTable activeComponent={activeComponent} />
        </main>
      </div>
    </div>
    </>
  );
};

export default AdminLayout;
