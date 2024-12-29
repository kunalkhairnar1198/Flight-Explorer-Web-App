import React, {  useCallback,  useState } from 'react';
import SearchBar from './SearchBar';
import allFlights from '../../FlightData/FlightDataind.json';
import { useDispatch } from 'react-redux';
import { UiActions } from '../../Reduxstore/Ui-slice/ui-slice';
import { NavLink } from 'react-router';

const FlightSearchData = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const isOpenPaymentHandler = () => {
    dispatch(UiActions.isOpenHandle(true));
  };



  const searchFlights =  useCallback((searchParams) => {
    const { departure, destinations, departureDate, arrivalDate, tripType } = searchParams;

    setLoading(true);
    setError('');
    setFlights([]);
    

    try {
      const filteredFlights = allFlights.filter((flight) => {
        const isDepartureMatch = flight.origin.toLowerCase().includes(departure.toLowerCase());
        const isDestinationMatch = destinations.some((destination) =>
          flight.destination.toLowerCase().includes(destination.toLowerCase())
        );
        const isDateMatch = !departureDate || flight.departureTime.startsWith(departureDate);
        return isDepartureMatch && isDestinationMatch && isDateMatch;
      });

      if (filteredFlights.length > 0) {
        setFlights(filteredFlights);
      } else {
        setError('No flights found for the selected criteria.');
      }
    } catch (err) {
      setError('An error occurred while searching for flights.');
    } finally {
      setLoading(false);
    }
  }, []);

  
  return (
    <div className="container mx-auto p-4">
      <SearchBar searchFlights={searchFlights} />
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Available Flights</h2>

        {loading && <p>Loading flights...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && flights.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {flights.map((flight) => (
             <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden" key={flight.id}>
             <div className="p-4">
               <div className="flex items-center justify-between">
                 <div className="flex items-center">
                   <div className="ml-4">
                     <h2 className="text-lg font-semibold">{flight.airline}</h2>
                     <p className="text-sm text-gray-600">{flight.flightId}</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-lg font-semibold">₹ {flight.price}</p>
                   <p className="text-sm text-gray-600">per adult</p>
                 </div>
               </div>
   
               <div className="mt-4">
                 <div className="flex justify-between items-center">
                   <div>
                     <p className="text-lg font-semibold">
                       {new Date(flight.departureTime).toLocaleTimeString([], {
                         hour: '2-digit',
                         minute: '2-digit',
                       })}
                     </p>
                     <p className="text-sm text-gray-600">{flight.origin}</p>
                   </div>
                   <div className="text-center">
                     <p className="text-sm text-gray-600">
                       {new Date(flight.arrivalTime).toLocaleTimeString([], {
                         hour: '2-digit',
                         minute: '2-digit',
                       })}
                     </p>
                     <p className="text-sm text-green-600">Estimated</p>
                   </div>
                   <div className="ml-6">
                     <p className="text-lg text-end font-semibold">
                       {new Date(flight.arrivalTime).toLocaleTimeString([], {
                         hour: '2-digit',
                         minute: '2-digit',
                       })}
                     </p>
                     <p className="text-sm text-end text-gray-600">{flight.destination}</p>
                   </div>
                 </div>
               </div>
   
               <div className="mt-2">
                 <p className="text-sm text-red-600">Get FLAT ₹ 115 OFF using code MMTSUPER</p>
               </div>
   
               <div className="mt-4 flex justify-between items-center">
                 <button onClick={isOpenPaymentHandler} className="bg-blue-500 text-white px-4 py-1 rounded">
                   Book NOW
                 </button>
                 <p className="text-sm text-gray-600">Lock this price starting from ₹ 287</p>
               </div>
   
               <div className="mt-4 text-right">
                 <NavLink to={`/flightdetail/${flight.id}`} state={flight} className="text-blue-500 text-sm">
                   View Flight Details
                 </NavLink>
               </div>
             </div>
           </div>
   
            ))}
          </div>
        )}

        {!loading && flights.length === 0 && !error && <p>No flights available. Please modify your search.</p>}
      </div>
    </div>
  );
};

export default FlightSearchData;
