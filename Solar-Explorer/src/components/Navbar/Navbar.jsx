import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center " to="/">
            <img src={logo} alt="Space Logo" className="me-2 Nav-img" />
            <span>SPACE EXPLORATION</span>
          </Link>
          <button
            className="btn-icon navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" aria-hidden="true" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center div-R"
            id="navbarNav"
          >
            <div className="navbar-nav ">
              <NavLink className="nav-link pe-5" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/Planets">
                Planets
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
