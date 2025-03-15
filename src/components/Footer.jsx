import Nav from './Nav';

function Footer() {
  return (
    <div className="h-40 flex justify-between px-16 items-center w-full bg-white" >
      <Nav />
        <p className='text-black'>&copy; {(new Date().getFullYear())} Scott Endicott. All Rights Reserved</p>
    </div>
  );
}

export default Footer;