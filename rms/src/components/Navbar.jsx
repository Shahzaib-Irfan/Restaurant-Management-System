import React from "react";
import { useUserContext } from "../contexts/UserContext";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const { currentUser, logout, token } = useUserContext();
  return (
    <nav
      style={{
        backgroundImage:
          "url('../../public/assets/pexels-erica-zhao-2670273.jpg')",
        position: "relative",
      }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Restaurant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div
              style={{ display: "flex", flexDirection: "row", padding: "3px" }}
            >
              {token !== "" ? (
                <Link
                  style={{ marginLeft: "10px" }}
                  onClick={() => logout()}
                  className="btn btn-outline-warning"
                  type="submit"
                >
                  Logout
                </Link>
              ) : (
                <Link
                  style={{ marginLeft: "10px" }}
                  to={"login"}
                  className="btn btn-outline-warning"
                >
                  Login
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
