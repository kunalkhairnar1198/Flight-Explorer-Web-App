import React, { useEffect, useState } from "react";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { UiActions } from "../../Reduxstore/Ui-slice/ui-slice";
import { deleteBooking, getAllBookings } from "../../IndexDb/FlightBookingDb";

const BookingCard = () => {
  const dispatch = useDispatch()
  

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
          setBookingFlightData(data);
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

      <div className=" p-10 mt-5 border-t rounded-lg  bg-white border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-sm [&::-webkit-scrollbar-track]:bg-slate-100">
        <h5 className="fixed mb-3 text-slate-800 text-xl font-semibold">
        Booking Details
        </h5>
        <button onClick={closeHandler} className="relative top-0 flex-end text-red-500">✖</button>
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
                  <p className="text-sm font-medium text-gray-600">Flight Date:</p>
                  <p className="text-gray-800">{booking.data.departureTime}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600">Origin:</p>
                  <p className="text-gray-800">{booking.data.origin}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Destination:</p>
                  <p className="text-gray-800">{booking.data.destination}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Departure Time:
                  </p>
                  <p className="text-gray-800">{booking.data.departureTime}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Arrival Time:</p>
                  <p className="text-gray-800">{booking.data.arrivalTime}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Price:</p>
                  <p className="text-gray-800">{`$${booking.data.price}`}</p>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={()=>handleDelete(booking.id)}
                >
                  Cancel Flight
                </button>
              </div>
            </div>
          ))}
      
      </div>   
      </Modal>   
  );
};

export default BookingCard;
