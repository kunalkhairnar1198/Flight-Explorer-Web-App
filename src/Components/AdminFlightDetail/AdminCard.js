import React, { useEffect, useState } from "react";
import flightData from '../../FlightData/Flightdata.json'
import { getAllBookings } from "../../IndexDb/FlightBookingDb";

const AdminCard = (props) => {
  const [availableSeats, setAvailableSeats] = useState(0);
  const [bookedSeats, setBookedSeats] = useState(0);
  const totalSeats = flightData.length;
  
  useEffect(() => {
    const getBookingSeats = async () => {
      const data = await getAllBookings();
      const totalBookedSeats = data.length;
      setBookedSeats(totalBookedSeats);
      setAvailableSeats(totalSeats - totalBookedSeats);
    };

    getBookingSeats();
  }, [totalSeats]);

  return (
    <>
      <div className="container px-6 py-8  mx-auto">
        <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

        <div className="mt-4">
          <div className="flex flex-wrap -mx-1">
            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">{bookedSeats}</h4>
                  <div className="text-gray-500">Total Bookings</div>
                </div>
              </div>
            </div>

            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">{availableSeats}</h4>
                  <div className="text-gray-500">Total Available seats</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
