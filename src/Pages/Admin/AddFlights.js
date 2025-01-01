import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UiActions } from '../../Reduxstore/Ui-slice/ui-slice';
import AllFlightsData from '../../FlightData/FlightDataind.json';

const ITEMS_PER_PAGE = 10; 

const AddFlights = () => {
  const dispatch = useDispatch();
  const [flights, setFlights] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  console.log(AllFlightsData)
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve(AllFlightsData), 1000)
        );
        setFlights(response);
      } catch (error) {
        console.error('Error fetching flight data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const handleDelete = (id) => {
    // setFlights((prevFlights) => prevFlights.filter((flight) => flight.id !== id));
  };

  const openInputFormModal = () => {
    dispatch(UiActions.isOpenHandle(true));
    console.log('Open Input Form Modal');
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedFlights = flights.slice(startIndex, endIndex);

  const totalPages = Math.ceil(flights.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto mb-5 p-6">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="py-5 flex mt-0 justify-between items-center">
          <h2 className="text-2xl mb-5 font-semibold text-gray-700">
            Add Flights Management
          </h2>
          <button
            onClick={openInputFormModal}
            className="px-5 py-2 bg-slate-700 text-white hover:bg-slate-600 border border-medium-dark rounded-lg"
          >
            Add Flight
          </button>
        </div>
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          {isLoading ? (
            <div className="text-center py-5">
              <p className="text-gray-500">Loading flights...</p>
            </div>
          ) : (
            <>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase bg-gray-50">
                      Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase bg-gray-50">
                      Flight Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase bg-gray-50">
                      Departure Date Time
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase bg-gray-50">
                      Arrival Date Time
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase bg-gray-50">
                      Edit
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase bg-gray-50">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {displayedFlights.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 border-b border-gray-200">
                        {item.flightId}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200">
                        {item.origin}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200">
                        {item.departureTime}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200">
                        {item.arrivalTime}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200">
                        <button className="text-green-600 hover:text-indigo-900">
                          Edit
                        </button>
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200">
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

              <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 mx-1 border rounded ${
                      page === currentPage
                        ? 'bg-slate-700 text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFlights;
