import React from "react";
import BookingDetail from "./BookingDetail";
import AddFlights from "./AddFlights";

const AdminTable = ({ activeComponent }) => {
 
  console.log("COMPONENT RENDER");
  return (
    <>
      {activeComponent === "booking" && <BookingDetail />}
      {activeComponent === "addFlight" && <AddFlights />}
    </>
  );
};

export default AdminTable;
