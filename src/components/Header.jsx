import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import logo from '../assets/endicott-logo.png';

function Header() {
  return (
    <div className="absolute flex justify-around items-center w-full bg-white" >
      <div>
        <img className="h-40" src={logo} alt="Logo" />
      </div>
      <Nav />
    </div>
  );
}

export default Header;