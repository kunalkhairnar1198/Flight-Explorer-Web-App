import React, { useState } from "react";
import Mainnavigation from "../../Components/Layout/Mainnavigation";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../../Reduxstore/Ui-slice/ui-slice";
import PaymentGateway from "../../Components/Payment/PaymentGateway";
import {  NavLink, useLocation, useNavigate } from "react-router";
import BookingConfirmation from "./BookingConfirmation";

const FlightDetailPage = () => {
  const dispatch = useDispatch();
  const isState = useSelector((state) => state.ui.isOpen);
  const navigate = useNavigate();
  const location = useLocation();
  const [isConfirm, setIsConfirm] = useState(false)
  const [id, setId]= useState(null)

  const flightData = location.state || {};
  console.log(flightData);
  console.log(isState);

  const PaymentGateHandler = () => {
    // console.log("exte");
    dispatch(UiActions.isOpenHandle(true));
  };

  const BackpageHandler = () => {
    navigate("/layout");
  };

  const HandleGetUserId =(id)=>{
      // console.log(id)
      setIsConfirm(true)
      setId(id)

  }
 
  if (!flightData) {
    return (
      <div>
        <p>No flight details available!</p>
        <NavLink to="/layout">Back to Flight List</NavLink>
      </div>
    );
  }

  return (
    <Mainnavigation>
       {isConfirm && <BookingConfirmation data={id}/>}
      {isState && <PaymentGateway data={flightData} onGetUserId={HandleGetUserId}  />}
     
      <div className="bg-white p-4 lg:max-w-7xl max-w-4xl  mx-auto">
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
                Airline Name:{" "}
                <span className="font-semibold">{flightData.airline}</span>
              </p>
              <p className="text-gray-600">
                Flight Number:{" "}
                <span className="font-semibold">{flightData.flightId}</span>
              </p>
              <p className="text-gray-600">
                Departure:{" "}
                <span className="font-semibold">
                  {flightData.origin}
                </span>
              </p>
              <p className="text-gray-600">
                Arrival:{" "}
                <span className="font-semibold">
                  {flightData.destination}
                </span>
              </p>
              <p className="text-gray-600">
                Departure scheduled:{" "}
                <span className="font-semibold">
                  {new Date(flightData.departureTime).toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </span>
              </p>
              <p className="text-gray-600">
                Arrival scheduled:{" "}
                <span className="font-semibold">
                  {new Date(flightData.arrivalTime).toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </span>
              </p>
              <p className="text-gray-600">
                Date:{" "}
                <span className="font-semibold">{flightData.departureTime}</span>
              </p>
              <p className="text-gray-600">
                Time:{" "}
                <span className="font-semibold">
                {new Date(flightData.arrivalTime).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <p className="text-gray-800 text-2xl font-bold">
                ₹{flightData.discountPrice}
              </p>
              <p className="text-gray-500 text-base">
                <strike>₹{flightData.price}</strike>{" "}
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
                <li className="text-sm">
                Free Wi-Fi
                </li>
                <li className="text-sm">
                In-flight Entertainment
                </li>
                <li className="text-sm">
                Complimentary Snacks
                </li>
                <li className="text-sm">
                Extra Legroom Available
                </li>
            </ul>
          </div>
        </div>
      </div>
    </Mainnavigation>
  );
};

export default FlightDetailPage;
