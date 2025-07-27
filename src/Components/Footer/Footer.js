import React from 'react';
import { NavLink } from 'react-router';

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 Flight Booking. All rights reserved.</p>

          <div className="flex space-x-4">
            <NavLink className="text-muted-foreground hover:text-primary" href="#">
              Privacy Policy
            </NavLink>

            <NavLink className="text-muted-foreground hover:text-primary" href="#">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
