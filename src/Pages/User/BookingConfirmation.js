import Modal from "../../UI/Modal";

const BookingConfirmation = ({data}) => {
  console.log(data)
  if (!data) {
    return null;
  }
console.log('confirm')
  return (
    <Modal>
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Booking Confirmed!
      </h2>
      <p className="text-lg text-gray-700">
        Your booking with User ID{" "}
        <span className="font-semibold">{data}</span> is
        confirmed.
      </p>
      <p className="text-gray-600 mt-4">"Booking succesfully"</p>
      <button
        className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        onClick={() => window.location.reload()}
      >
        Go to Dashboard
      </button>
    </div>
    </Modal>
  );
};

export default BookingConfirmation;
