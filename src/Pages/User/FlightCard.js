import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UiActions } from '../../Reduxstore/Ui-slice/ui-slice';
import { NavLink } from 'react-router';
import FlightData from '../../FlightData/FlightDataind.json'


const FlightCard = (props) => {
  const [flightData, setFlights] = useState([]);
  const dispatch = useDispatch();

  const isOpenPaymentHandler = () => {
    dispatch(UiActions.isOpenHandle(true));
  };

  const generateRandomPrice = (min = 3000, max = 10000) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const calculateDiscount = (originalPrice, discountRate = 20) => {
    return Math.floor(originalPrice - (originalPrice * discountRate) / 100);
  };

  useEffect(() => {
    const updatedFlights = FlightData.map((flight) => {
      const originalPrice = flight.price || generateRandomPrice();
      const discountPrice = calculateDiscount(originalPrice);

      return { ...flight, price: originalPrice, discountPrice, id: Math.random().toString() };
    });

    setFlights(updatedFlights);
  }, []);

  return (
    <>
      {flightData.map((flight, index) => (
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden" key={index}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{flight.airline}</h2>
                  <p className="text-sm text-gray-600">{flight.flightId}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">₹ {flight.discountPrice}</p>
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
    </>
  );
};

export default FlightCard;
