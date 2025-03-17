import Nav from './Nav';
import logo from '../assets/endicott-logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="absolute h-24 px-4 flex justify-between md:px-16 items-center w-full bg-white" >
      <div>
      <NavLink to="/">
        <img className="h-18" src={logo} alt="Logo" />
      </NavLink>
      </div>
      <Nav />
    </div>
  );
}

export default Header;