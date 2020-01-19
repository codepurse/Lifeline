import Link from "next/link";


const Navbar = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-md navbar-light">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar-brand" href="#">
        <a href="#">
          <img
            src="/Image/logo.png" alt =""
            className="img-fluid imglogo"
          />
        </a>
      </nav>
      <div className="collapse navbar-collapse" id="collapse">

      </div>
    </nav>
  </div>
);

export default Navbar;
