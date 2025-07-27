import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getAllBookings, saveBooking } from '../../IndexDb/FlightBookingDb';
import { UiActions } from '../../Reduxstore/Ui-slice/ui-slice';
import Modal from '../../UI/Modal';

function PaymentGateway({ data, onGetUserId }) {
  const [cardDetails, setCardDetails] = useState({
    username: '',
    cardNumber: '',
    expiryMonth: '01',
    expiryYear: '2024',
    securityCode: '',
  });

  const dispatch = useDispatch();
  const { email } = JSON.parse(localStorage.getItem('loggedInUser'));
  // console.log(email, props);

  const closeHandler = () => {
    dispatch(UiActions.isOpenHandle(false));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // console.log(cardDetails.username);

  const PaymentProcessHandler = async (email, data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const bookingData = {
        id: `${email}-${data.id}`,
        userId: data.id,
        name: cardDetails.username,
        flightName: data.airline,
        price: data.discountPrice,
        cardNumber: cardDetails.cardNumber,
        date: new Date().toISOString(),
        status: false,
        data,
      };

      await saveBooking(bookingData);
      const bokdata = await getAllBookings();
      console.log('GEtallbooking', bokdata);
      console.log('---------', bookingData);
      // alert("succesfully booked seat");
      onGetUserId(bookingData.userId);
      closeHandler();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal onClick={closeHandler}>
      <div className="flex items-center justify-center min-h-full px-2 pb-10 pt-15">
        <div className="w-50 mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl" />
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
          </div>

          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label className="flex items-center cursor-pointer" htmlFor="type1">
                <input
                  defaultChecked
                  className="form-radio h-5 w-5 text-indigo-500"
                  id="type1"
                  name="type"
                  type="radio"
                />

                <img
                  alt="Credit Card"
                  className="h-8 ml-3"
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                />
              </label>
            </div>

            <div className="px-2">
              <label className="flex items-center cursor-pointer" htmlFor="type2">
                <input className="form-radio h-5 w-5 text-indigo-500" id="type2" name="type" type="radio" />

                <img
                  alt="PayPal"
                  className="h-8 ml-3"
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                />
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>

            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                name="username"
                placeholder="John Smith"
                type="text"
                value={cardDetails.username}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>

            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                type="text"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>

              <div>
                <select
                  className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  name="expiryMonth"
                  value={cardDetails.expiryMonth}
                  onChange={handleInputChange}
                >
                  <option value="01">01 - January</option>

                  <option value="02">02 - February</option>

                  <option value="03">03 - March</option>

                  <option value="04">04 - April</option>

                  <option value="05">05 - May</option>

                  <option value="06">06 - June</option>

                  <option value="07">07 - July</option>

                  <option value="08">08 - August</option>

                  <option value="09">09 - September</option>

                  <option value="10">10 - October</option>

                  <option value="11">11 - November</option>

                  <option value="12">12 - December</option>
                </select>
              </div>
            </div>

            <div className="px-2 w-1/2">
              <select
                className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                name="expiryYear"
                value={cardDetails.expiryYear}
                onChange={handleInputChange}
              >
                <option value="2020">2020</option>

                <option value="2021">2021</option>

                <option value="2022">2022</option>

                <option value="2023">2023</option>

                <option value="2024">2024</option>

                <option value="2025">2025</option>

                <option value="2026">2026</option>

                <option value="2027">2027</option>

                <option value="2028">2028</option>

                <option value="2029">2029</option>
              </select>
            </div>
          </div>

          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>

            <div>
              <input
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                name="securityCode"
                placeholder="000"
                type="text"
                value={cardDetails.securityCode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <button
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
              onClick={() => PaymentProcessHandler(email, data)}
            >
              <i className="mdi mdi-lock-outline mr-1" /> PAY NOW
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PaymentGateway;
