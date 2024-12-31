import React, { useEffect, useState } from "react";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { UiActions } from "../../Reduxstore/Ui-slice/ui-slice";
import { deleteBooking, getAllBookings } from "../../IndexDb/FlightBookingDb";

const BookingCard = () => {
  const dispatch = useDispatch();

  const [bookingFlightData, setBookingFlightData] = useState([]);

  useEffect(() => {
    const getAllBookingFlights = async () => {
      const data = await getAllBookings();
      console.log(data);
      setBookingFlightData(data);
    };
    getAllBookingFlights();
  }, []);

  const handleDelete = async (bookingId) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await deleteBooking(bookingId);
        const data = await getAllBookings();
        await setBookingFlightData(data);
        alert("Booking deleted successfully");
      } catch (err) {
        alert("Failed to delete booking");
      }
    }
  };

  const closeHandler = () => {
    dispatch(UiActions.isBookingsCartOpen(false));
  };

  return (
    <Modal onClick={closeHandler}>
      <div className="relative p-5 mt-1 border-t rounded-2xl  bg-white border-slate-100 text-center shadow-lg max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-sm [&::-webkit-scrollbar-track]:bg-slate-100">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center border-b pb-2 sm:pb-3">
          <h3 className="text-lg sm:text-base font-bold text-gray-800">
            Booking Details
          </h3>
          <button
            onClick={closeHandler}
            className="text-red-500 hover:text-red-600 focus:outline-none"
          >
            ✖
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {bookingFlightData.map((booking, index) => (
            <div
              className="relative border border-gray-200 rounded-lg shadow-lg p-8 mt-9 bg-white"
              key={index}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* User Information */}
                <div>
                  <p className="text-sm font-medium text-gray-600">Username:</p>
                  <p className="text-gray-800">{booking.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Flight Date:
                  </p>
                  <p className="text-gray-800">{booking.data.departureTime}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600">Origin:</p>
                  <p className="text-gray-800">{booking.data.origin}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Destination:
                  </p>
                  <p className="text-gray-800">{booking.data.destination}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Departure Time:
                  </p>
                  <p className="text-gray-800">{booking.data.departureTime}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Arrival Time:
                  </p>
                  <p className="text-gray-800">{booking.data.arrivalTime}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Price:</p>
                  <p className="text-gray-800">{`$${booking.data.price}`}</p>
                </div>
              </div>
              <div className="mt-4 text-right">
                <button
                  onClick={() => handleDelete(booking.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                >
                  Cancel Flight
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default BookingCard;
