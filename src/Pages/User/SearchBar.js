import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [tripType, setTripType] = useState('one-way'); 
  const [destinations, setDestinations] = useState(['', '', '']); 
  const [departure, setDeparture] = useState(''); 
  const [destination, setDestination] = useState(''); 
  const [departureDate, setDepartureDate] = useState(''); 
  const [returnDate, setReturnDate] = useState(''); 

  const handleTripTypeChange = (type) => {
    setTripType(type);
    setDestinations(['', '', '']);
    setDestination('');
    setReturnDate('');
  };

  const handleDestinationChange = (index, value) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[index] = value;
    setDestinations(updatedDestinations);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tripType, destination,departure,departureDate,returnDate,destinations)
    const searchParams = {
      tripType,
      departure,
      destination: tripType === 'multi-city' ? destinations : destination,
      departureDate,
      returnDate,
    };
    console.log(searchParams)
    onSearch(searchParams);
  };

  return (
    <form className="bg-card p-6 rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
      {/* Trip type selection */}
      <div className="flex justify-between mb-4">
        {['one-way', 'round-trip', 'multi-city'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleTripTypeChange(type)}
            className={`w-1/3 py-2 text-center ${tripType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {type.replace('-', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      {/* Departure and destination inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-500 font-bold mb-1">Departure</label>
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="City or Airport"
            required
          />
        </div>
        {tripType === 'multi-city'
          ? destinations.map((destination, index) => (
              <div key={index}>
                <label className="block text-gray-500 font-bold mb-1">
                  Destination {index + 1}
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => handleDestinationChange(index, e.target.value)}
                  className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="City or Airport"
                  required
                />
              </div>
            ))
          : (
            <div>
              <label className="block text-gray-500 font-bold mb-1">Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="City or Airport"
                required
              />
            </div>
          )}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-500 font-bold mb-1">Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            required
          />
        </div>
        {tripType === 'round-trip' && (
          <div>
            <label className="block text-gray-500 font-bold mb-1">Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="bg-gray-200 border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
