import Nav from './Nav';
import logo from '../assets/endicott-logo.png';

function Header() {
  return (
    <div className="absolute h-40 flex justify-between px-16 items-center w-full bg-white" >
      <div>
        <img className="h-40" src={logo} alt="Logo" />
      </div>
      <Nav />
    </div>
  );
}

export default Header;