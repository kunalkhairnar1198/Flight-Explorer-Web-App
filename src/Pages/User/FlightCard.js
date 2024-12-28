import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const FlightCard = () => {

    
    const [flightData, setFlights] = useState([])


    const fetchFlights = async() =>{
        const apiKey = '107fb0c66534ce7b84fdfe728711829c'; 

        try {
            const apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${apiKey}`;
      
            const response = await fetch(apiUrl);
            const data = await response.json();
              console.log(data.data)
            if (data?.data?.length > 0) {
              console.log(data.data)
              setFlights(data.data);
            } 
            // else {
            //   setError('No flights found for the selected date.');
            // }
          } catch (err) {
            console.log(err)
            // setError('Failed to fetch flights. Please try again later.');
          } finally {
            console.log('here')
          }
        };


    useEffect(()=>{
        fetchFlights()
        // console.log(flightData)
    },[])
    



    return (
        <>
        {flightData.map((flight, index) => (
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden" key={index}>
                <div className="p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold">{flight.airline.name}</h2>
                            <p className="text-sm text-gray-600">{flight.flight.iata}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">₹ 5,932</p>
                        <p className="text-sm text-gray-600">per adult</p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-lg font-semibold"> {new Date(flight.departure.scheduled).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}</p>
                            <p className="text-sm text-gray-600">{flight.departure.airport}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-600"> {new Date(flight.arrival.scheduled).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}</p>
                            <p className="text-sm text-green-600">{flight.arrival.airport}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">08:15</p>
                            <p className="text-sm text-gray-600">Mumbai</p>
                        </div>
                        <div>
                            <p
                            className={`text-sm ${
                                flight.flight_status === 'scheduled'
                                ? 'text-blue-600'
                                : flight.flight_status === 'active'
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}
                            >
                            Status: {flight.flight_status}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-red-600">Get FLAT ₹ 115 OFF using code MMTSUPER</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">VIEW PRICES</button>
                    <p className="text-sm text-gray-600">Lock this price starting from ₹ 287</p>
                </div>
                <div className="mt-4 text-right">
                    <NavLink  className="text-blue-500 text-sm">View Flight Details</NavLink>
                </div>
            </div>
        </div>))}
        </>
  );
}
export default FlightCard;