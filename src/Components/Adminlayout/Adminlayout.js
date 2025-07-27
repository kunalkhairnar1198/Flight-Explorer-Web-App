import { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import Sidebar from './Sidebar';
import AdminTable from '../../Pages/Admin/AdminTable';
import FlightInput from '../../Pages/Admin/FlightInput';
import AdminCard from '../AdminFlightDetail/AdminCard';

function AdminLayout(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('booking');
  const isState = useSelector((state) => state.ui.isOpen);
  const handleSidebarClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {isState ? <FlightInput /> : null}

      <Sidebar handleSidebarClick={handleSidebarClick} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

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
  );
}

export default AdminLayout;
