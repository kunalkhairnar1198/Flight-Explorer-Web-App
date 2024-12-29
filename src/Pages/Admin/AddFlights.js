import React from 'react';
import { useDispatch } from 'react-redux';
import { UiActions } from '../../Reduxstore/Ui-slice/ui-slice';


const bookingFlightData = [
  {
    id: "1",
    name: "John Doe",
    flightName: "Flight ABC123",
    data: {
      flight_status: "Confirmed",
      flight_date: "2024-12-30",
      departure: {
        scheduled: "2024-12-30T08:00:00Z",
      },
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    flightName: "Flight XYZ456",
    data: {
      flight_status: "Pending",
      flight_date: "2025-01-15",
      departure: {
        scheduled: "2025-01-15T14:30:00Z",
      },
    },
  },
];



const AddFlights = () => {
        const dispatch = useDispatch()


    const openInputFormModal =()=>{
            dispatch(UiActions.isOpenHandle(true))
            console.log('object')
    }

  const handleDelete = (id) => {
    console.log(`Deleting booking with id: ${id}`);
  };

  return (
    <div className="container mx-auto mb-5 p-6">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="py-5 flex mt-0 justify-between items-center">
        <h2 className="text-2xl mb-5 font-semibold text-gray-700">
          Add Flights Management
        </h2>
        <button onClick={openInputFormModal} className="px-5 py-2 bg-slate-700 text-white hover:bg-slate-600 border border-medium-dark rounded-lg">
          Add Flight
        </button>
      </div>
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Flight Name
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Status
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Flight Departure Date
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Flight Arriving Date
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Edit
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {bookingFlightData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium leading-5 text-gray-900">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      {item.flightName}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                      {item.data.flight_status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                    {item.data.flight_date}
                  </td>
                  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                    {new Date(item.data.departure.scheduled).toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-green-600 hover:text-indigo-900"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddFlights;
