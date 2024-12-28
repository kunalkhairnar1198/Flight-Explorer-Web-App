import React from "react";

const Filter = () => {
  const [price, setPrice] = React.useState(500);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {/* Price Range */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Price Range: ${price}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                value={price}
                onChange={handlePriceChange}
                className="w-full bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>

            {/* Airlines */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Airlines
              </label>
              <select className="w-full bg-gray-200 border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-indigo-500">
                <option>Any</option>
                <option>Air India</option>
                <option>IndiGo</option>
                <option>SpiceJet</option>
              </select>
            </div>

            {/* Stops */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Stops
              </label>
              <select className="w-full bg-gray-200 border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-indigo-500">
                <option>Non-stop</option>
                <option>1-stop</option>
                <option>2+ stops</option>
              </select>
            </div>

            {/* Departure */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Departure
              </label>
              <select className="w-full bg-gray-200 border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-indigo-500">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Arrival
              </label>
              <select className="w-full bg-gray-200 border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-indigo-500">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
