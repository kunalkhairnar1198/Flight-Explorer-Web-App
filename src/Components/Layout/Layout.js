import React from 'react'
import Mainnavigation from './Mainnavigation'
// import SearchBar from '../../Pages/User/SearchBar'
import Footer from '../Footer/Footer'
import UserDashboard from '../../Pages/User/UserDashboard'
import FlightSearch from '../../Pages/User/FlightSearch'

const Layout = (props) => {
  return (
    <div className="bg-background min-h-screen">
        <Mainnavigation />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-primary-foreground mb-6">Welcome to Flight Booking</h1>
            <p className="text-lg text-muted-foreground mb-8">Find the best flights and book your next adventure with ease.</p>
            <FlightSearch />
            <UserDashboard />
          </main>
        <Footer/>
    </div>
  )
}

export default Layout
