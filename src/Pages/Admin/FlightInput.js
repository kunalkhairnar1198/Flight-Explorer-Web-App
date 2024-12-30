import { useState } from "react";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { UiActions } from "../../Reduxstore/Ui-slice/ui-slice";

const FlightInput = () => { 
  const dispatch = useDispatch();
  const [flightFormData, setFlightFormData] = useState({
    flightId:'',
    airline: '',
    origin: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    price: '',
    seatsAvailable: '',
    duration: '',
    date: ''
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

  const addProductHandler = async (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  return (
    <Modal onClick={closeHandler}>
      <div className='flex justify-center items-center h-full'>
        <div className="bg-slate-800 px-2 py-5 border border-dark-100 rounded-xl shadow-md max-w-15xl">
          <div className="mb-5">
            <h2 className='text-center text-3xl font-bold text-white'>Add Flight</h2>
          </div>
          <form onSubmit={addProductHandler} className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="mb-3">
              <input 
                type="text" 
                name="airline" 
                placeholder='Flight airline' 
                value={flightFormData.airline} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300' 
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="origin" 
                placeholder='Departure Airport' 
                value={flightFormData.origin} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300' 
              />
            </div>
            
            <div className="mb-3">
              <input 
                type="datetime-local" 
                name="departureTime" 
                placeholder='Departure Time' 
                value={flightFormData.departureTime} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300' 
              />
            </div>

            <div className="mb-3">
              <input 
                type="text" 
                name="destination" 
                placeholder='Arrival Airport' 
                value={flightFormData.destination} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300' 
              />
            </div>

            <div className="mb-3">
              <input 
                type="datetime-local" 
                name="arrivalTime" 
                placeholder='Arrival Time' 
                value={flightFormData.arrivalTime} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300' 
              />
            </div>
            <div className="mb-3">
              <input 
                type="number" 
                name="price" 
                placeholder='Price' 
                value={flightFormData.price} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300' 
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                name="duration" 
                placeholder='Flight Duration' 
                value={flightFormData.duration} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300' 
              />
            </div>

            <div className="mb-3">
              <select 
                name="classfield" 
                value={flightFormData.classfield} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300'>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
                <option value="Firstclass">Firstclass</option>
              </select>
            </div>
            <div className="mb-3">
              <input 
                type="number" 
                name="seatsAvailable" 
                placeholder='Seats Available' 
                value={flightFormData.seatsAvailable} 
                onChange={handleInputChange} 
                className='bg-slate-100 text-slate-500 border border-dark-100 px-2 py-2 w-full rounded-md outline-none placeholder-dark-300' 
              />
            </div>
            <div className="mb-3 col-span-1">
              <button 
                type='submit' 
                className='bg-green-800 hover:bg-green-700 w-full text-white text-center py-2 font-bold rounded-md'
              >
                Add Flight
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default FlightInput;
