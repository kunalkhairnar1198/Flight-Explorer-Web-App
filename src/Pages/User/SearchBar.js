import { useState, useEffect, useMemo } from 'react';

import useDebounce from '../../Hook/useDebaounce';

function SearchBar({ searchFlights }) {
  const [tripType, setTripType] = useState('one-way');
  const [departure, setDeparture] = useState('');
  const [destinations, setDestinations] = useState(['']);
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  const debouncedDeparture = useDebounce(departure, 500);
  const debouncedDestinations = useDebounce(destinations, 500);

  const searchParams = useMemo(
    () => ({
      tripType,
      departure: debouncedDeparture,
      destinations: debouncedDestinations,
      departureDate,
      arrivalDate,
    }),
    [debouncedDeparture, debouncedDestinations, tripType, departureDate, arrivalDate]
  );

  useEffect(() => {
    if (searchParams.departure || searchParams.destinations.some(Boolean)) {
      searchFlights(searchParams);
    }
  }, [searchParams, searchFlights]);

  const handleDestinationChange = (index, value) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[index] = value;
    setDestinations(updatedDestinations);
  };

  const addDestination = () => {
    setDestinations([...destinations, '']);
  };

  const removeDestination = (index) => {
    setDestinations(destinations.filter((_, i) => i !== index));
  };

  return (
    <form className="bg-card p-6 rounded-lg shadow-lg space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Trip Type Buttons */}
      <div className="flex justify-between mb-4">
        {['one-way', 'round-trip', 'multi-city'].map((type) => (
          <button
            key={type}
            className={`w-1/3 py-2 text-center ${tripType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            type="button"
            onClick={() => setTripType(type)}
          >
            {type.replace('-', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      {/* Departure and Destinations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-500 font-bold mb-1">Departure</label>

          <input
            required
            className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="City or Airport"
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        {tripType === 'multi-city' ? (
          destinations.map((destination, index) => (
            <div key={index} className="relative">
              <label className="block text-gray-500 font-bold mb-1">Destination {index + 1}</label>

              <input
                required
                className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="City or Airport"
                type="text"
                value={destination}
                onChange={(e) => handleDestinationChange(index, e.target.value)}
              />

              {index > 0 && (
                <button
                  className="absolute top-0 right-0 text-red-500"
                  type="button"
                  onClick={() => removeDestination(index)}
                >
                  ✖
                </button>
              )}
            </div>
          ))
        ) : (
          <div>
            <label className="block text-gray-500 font-bold mb-1">Destination</label>

            <input
              required
              className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="City or Airport"
              type="text"
              value={destinations[0]}
              onChange={(e) => handleDestinationChange(0, e.target.value)}
            />
          </div>
        )}
      </div>

      {tripType === 'multi-city' && (
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          type="button"
          onClick={addDestination}
        >
          + Add Destination
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-500 font-bold mb-1">Departure Date</label>

          <input
            required
            className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {tripType === 'round-trip' && (
          <div>
            <label className="block text-gray-500 font-bold mb-1">Return Date</label>

            <input
              className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
