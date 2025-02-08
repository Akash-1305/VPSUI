import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
import img from '../../Images/logo.png'

const HomeHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={img} alt="" width="300px" />
    </Link>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link ">
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default HomeHeader;
