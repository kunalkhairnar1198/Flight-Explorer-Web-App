import React, { Children, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AdminCard from "../AdminFlightDetail/AdminCard";
import AdminTable from "../../Pages/Admin/AdminTable";

const AdminLayout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <div className="flex flex-wrap-mx-6">
                <AdminCard />
              </div>
          <AdminTable />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
