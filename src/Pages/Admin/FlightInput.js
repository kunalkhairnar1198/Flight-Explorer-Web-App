import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { UiActions } from '../../Reduxstore/Ui-slice/ui-slice';
import Modal from '../../UI/Modal';

function FlightInput() {
  const dispatch = useDispatch();
  const [flightFormData, setFlightFormData] = useState({
    flightId: '',
    airline: '',
    origin: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    price: '',
    seatsAvailable: '',
    duration: '',
    date: '',
  });

  const closeHandler = () => {
    dispatch(UiActions.isOpenHandle(false));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlightFormData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  console.log(flightFormData);

  const addProductHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <Modal onClick={closeHandler}>
      <div className="flex justify-center items-center h-full">
        <div className="bg-slate-800 px-2 py-5 border border-dark-100 rounded-xl shadow-md max-w-15xl">
          <div className="mb-5">
            <h2 className="text-center text-3xl font-bold text-white">Add Flight</h2>
          </div>

          <form className="grid grid-cols-2 md:grid-cols-2 gap-4" onSubmit={addProductHandler}>
            <div className="mb-3">
              <input
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="airline"
                placeholder="Flight airline"
                type="text"
                value={flightFormData.airline}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <input
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="origin"
                placeholder="Departure Airport"
                type="text"
                value={flightFormData.origin}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <input
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="departureTime"
                placeholder="Departure Time"
                type="datetime-local"
                value={flightFormData.departureTime}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <input
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="destination"
                placeholder="Arrival Airport"
                type="text"
                value={flightFormData.destination}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <input
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="arrivalTime"
                placeholder="Arrival Time"
                type="datetime-local"
                value={flightFormData.arrivalTime}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <input
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="price"
                placeholder="Price"
                type="number"
                value={flightFormData.price}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <input
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="duration"
                placeholder="Flight Duration"
                type="text"
                value={flightFormData.duration}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <select
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="classfield"
                value={flightFormData.classfield}
                onChange={handleInputChange}
              >
                <option value="Business">Business</option>

                <option value="Economy">Economy</option>

                <option value="Firstclass">Firstclass</option>
              </select>
            </div>

            <div className="mb-3">
              <input
                className="bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300"
                name="seatsAvailable"
                placeholder="Seats Available"
                type="number"
                value={flightFormData.seatsAvailable}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3 col-span-1">
              <button
                className="bg-green-800 hover:bg-green-700 w-full text-white text-center py-2 font-bold rounded-md"
                type="submit"
              >
                Add Flight
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default FlightInput;
