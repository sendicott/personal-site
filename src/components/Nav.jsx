import { NavLink } from 'react-router-dom'; // Add this import


function Nav() {
  return (
    <div className="block" >
      <NavLink to="/" className="mr-6 hover:border-b-2 hover:border-orange-300 hover:text-gray-600">
        Home
      </NavLink>
      <NavLink to="/about" className="mr-6 hover:border-b-2 hover:border-orange-300 hover:text-gray-600">
        About
      </NavLink>
      <NavLink to="/projects" className="mr-6 hover:border-b-2 hover:border-orange-300 hover:text-gray-600">
        Projects
      </NavLink>
      <NavLink to="/commonplace" className="hover:border-b-2 hover:border-orange-300 hover:text-gray-600">
        Commonplace
      </NavLink>
    </div>
  );
}

export default Nav;