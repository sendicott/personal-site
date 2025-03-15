import { NavLink } from 'react-router-dom'; // Add this import


function Nav() {
  return (
    <div className="block" >
      <NavLink to="/" className="mr-2">
        Home
      </NavLink>
      <NavLink to="/about" className="mr-2">
        About
      </NavLink>
      <NavLink to="/projects" className="mr-2">
        Projects
      </NavLink>
      <NavLink to="/commonplace">
        Commonplace
      </NavLink>
    </div>
  );
}

export default Nav;