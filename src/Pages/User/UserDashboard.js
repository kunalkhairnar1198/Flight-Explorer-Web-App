import React from 'react'
import FlightCard from './FlightCard'


const UserDashboard = (props) => {

   
  return (
    <section className="mt-12">
        
        <h2 className="text-3xl font-bold text-primary-foreground mb-6">Flights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FlightCard />
        </div>
        
        <h2 className="text-3xl font-bold text-primary-foreground mb-6">Popular Destinations</h2> 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card p-4 rounded-lg shadow-md">
            <img src="https://placehold.co/300x200?text=New+York" alt="New York City" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-card-foreground">New York City</h3>
            <p className="text-muted-foreground mt-2">Explore the bustling city life and iconic landmarks.</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-md">
            <img src="https://placehold.co/300x200?text=Paris" alt="Paris" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-card-foreground">Paris</h3>
            <p className="text-muted-foreground mt-2">Experience the romance and charm of the City of Light.</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-md">
            <img src="https://placehold.co/300x200?text=Tokyo" alt="Tokyo" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-card-foreground">Tokyo</h3>
            <p className="text-muted-foreground mt-2">Discover the blend of tradition and modernity in Tokyo.</p>
        </div>
        </div>
  </section>
  )
}

export default UserDashboard
