function Nav() {
  return (
    <div className="w-100 bg-white block" >
      <button to="/" className="mr-2">
        Home
      </button>
      <button to="/about" className="mr-2">
        About
      </button>
      <button to="/projects" className="mr-2">
        Projects
      </button>
      <button to="/commonplace">
        Commonplace
      </button>
    </div>
  );
}

export default Nav;