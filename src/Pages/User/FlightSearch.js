import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filter from '../../Components/Layout/Filter';

const FlightSearch = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFlights = async (searchParams) => {
    const apiKey = '107fb0c66534ce7b84fdfe728711829c'; // Replace with your AviationStack API key
    const { tripType, destinations, departureDate, returnDate } = searchParams;
console.log(searchParams)
    setLoading(true);
    setError('');
    setFlights([]);

    try {
      const apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${apiKey}&date=${departureDate}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
        console.log(data.data)
      if (data?.data?.length > 0) {
        console.log(data.data)
        setFlights(data.data);
      } else {
        setError('No flights found for the selected date.');
      }
    } catch (err) {
      setError('Failed to fetch flights. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={fetchFlights} />
      <Filter/>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Available Flights</h2>

        {loading && <p>Loading flights...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && flights.length > 0 && (
          <ul>
            {flights.map((flight, index) => (
              <li key={index} className="mb-4 border p-4 rounded">
                <p><strong>Airline:</strong> {flight.airline?.name || 'N/A'}</p>
                <p><strong>Flight Number:</strong> {flight.flight?.iata || 'N/A'}</p>
                <p><strong>Departure:</strong> {flight.departure?.airport} at {new Date(flight.departure?.scheduled).toLocaleString() || 'N/A'}</p>
                <p><strong>Arrival:</strong> {flight.arrival?.airport} at {new Date(flight.arrival?.scheduled).toLocaleString() || 'N/A'}</p>
                <p><strong>Status:</strong> {flight.flight_status || 'N/A'}</p>
              </li>
            ))}
          </ul>
        )}

        {!loading && flights.length === 0 && !error && <p>No flights available. Please modify your search.</p>}
      </div>
    </div>
  );
};

export default FlightSearch;
