import React from "react";
import { NavLink } from "react-router";

const AdminTable = () => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User " },
    // Add more data as needed
  ];
  console.log("COMPONENT RENDER");
  return (
    <div className="container mx-auto mb-5 p-6">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <h2 className="text-2xl mb-5 font-semibold text-gray-700">
          Booking Management
        </h2>
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Title
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Status
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Role
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
             
             
              {data.map((item)=>(
                <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      {/* <img
                        className="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                        alt=""
                      /> */}
                    </div>

                    <div className="ml-4">
                      <div className="text-sm font-medium leading-5 text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        {item.email}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.role}
                  </div>
                  <div className="text-sm leading-5 text-gray-500">Web dev</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Active
                  </span>
                </td>

                <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                  Owner
                </td>

                <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                  <NavLink  className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </NavLink>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
