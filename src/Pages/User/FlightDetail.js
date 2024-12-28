import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Mainnavigation from "../../Components/Layout/Mainnavigation";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../../Reduxstore/Ui-slice/ui-slice";
import PaymentGateway from "../../Components/Payment/PaymentGateway";
import { useNavigate } from "react-router";

const FlightDetailPage = () => {
  const [flight, setFlight] = useState(null);
  const dispatch = useDispatch()
  const isState = useSelector((state) =>state.ui.isOpen )
  const navigate = useNavigate()

  console.log(isState)
  const PaymentGateHandler =()=>{
    console.log('exte')
     dispatch(UiActions.isOpenHandle(true));
  }

  const BackpageHandler =()=>{
    navigate('/layout')
  }
  
  useEffect(() => {
    // Simulate fetching data
    const fetchFlightData = async () => {
      const flightData = {
        flightNumber: "AB1234",
        departure: "New York (JFK)",
        arrival: "Los Angeles (LAX)",
        date: "October 25, 2023",
        time: "10:00 AM - 1:00 PM",
        price: 350,
        originalPrice: 450,
        amenities: [
          "Free Wi-Fi",
          "In-flight Entertainment",
          "Complimentary Snacks",
          "Extra Legroom Available",
        ],
        reviews: [
          {
            rating: 5.0,
            percentage: 66,
            reviewer: "Jane Smith",
            time: "5 mins ago",
            comment:
              "Great flight experience! The staff was very friendly and the food was excellent.",
          },
          // Add more reviews as needed
        ],
      };
      setFlight(flightData);
    };

    fetchFlightData();
  }, []);

  if (!flight) return <div>Loading...</div>;

  return (
    <Mainnavigation>
       {isState &&  <PaymentGateway />}
      <div className="bg-white p-4 lg:max-w-7xl max-w-4xl p-2 mx-auto">
        
        <div className="grid items-start grid-cols-1 lg:grid-cols-7 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6 rounded">
             <button
                type="button"
                className="w-4 px-1 py-2 outline-none border-none bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                onClick={BackpageHandler}
              >
                Back
              </button>
          <div className="lg:col-span-2 p-3">
            <h3 className="text-xl font-bold text-gray-800">Flight Details</h3>
            <div className="mt-4">
              <p className="text-gray-600">
                Flight Number:{" "}
                <span className="font-semibold">{flight.flightNumber}</span>
              </p>
              <p className="text-gray-600">
                Departure:{" "}
                <span className="font-semibold">{flight.departure}</span>
              </p>
              <p className="text-gray-600">
                Arrival: <span className="font-semibold">{flight.arrival}</span>
              </p>
              <p className="text-gray-600">
                Date: <span className="font-semibold">{flight.date}</span>
              </p>
              <p className="text-gray-600">
                Time: <span className="font-semibold">{flight.time}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <p className="text-gray-800 text-2xl font-bold">
              ₹{flight.price}
              </p>
              <p className="text-gray-500 text-base">
                <strike>₹{flight.originalPrice}</strike>{" "}
                <span className="text-sm ml-1">Tax included</span>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">
                Choose a Class
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  className="w-32 h-10 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Economy
                </button>
                <button
                  type="button"
                  className="w-32 h-10 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Business
                </button>
                <button
                  type="button"
                  className="w-32 h-10 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  First Class
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-12 max-w-md">
              <button
                onClick={PaymentGateHandler}
                type="button"
                className="w-full px-4 py-2.5 outline-none border border-white-600 bg-red-500 hover:bg-red-700 text-white text-sm font-semibold rounded"
              >
                Book Now
              </button>
              
            </div>
          </div>

          <div className="lg:col-span-3 p-3">
            <h3 className="text-xl font-bold text-gray-800">
              Flight Amenities
            </h3>
            <ul className="mt-4 space-y-2 text-gray-800">
              {flight.amenities.map((amenity, index) => (
                <li key={index} className="text-sm">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </Mainnavigation>
  );
};

export default FlightDetailPage;
