import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="block">
      {/* Hamburger Icon (visible on mobile) */}
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:space-x-6 absolute md:static top-24 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-10 shadow-2xl`}
      >
        <NavLink
          to="/"
          className="block md:inline-block mr-6 hover:border-b-2 hover:border-orange-300 hover:text-gray-600"
          onClick={() => setIsOpen(false)} // Close menu on click
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="block md:inline-block mr-6 hover:border-b-2 hover:border-orange-300 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        {/* <NavLink
          to="/touch-of-wisdom"
          className="block md:inline-block hover:border-b-2 hover:border-orange-300 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Touch of Wisdom API
        </NavLink> */}
      </div>
    </nav>
  );
}

export default Nav;