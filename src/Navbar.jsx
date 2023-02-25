import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBlog, faBurger, faCheckSquare, faCoffee, faHome, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

library.add(faHome,faBlog,faCheckSquare,faUtensils,faPhone)

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top bg-light  py-0 my-0">
      <div className="container-fluid">
        <a className="font-poppins fw-bold text-prime-gradient navbar-brand" href="#">
          <img
            src="/images/logo-navbar.png"
            alt=""
            width="50"
            height="24"
            className="d-inline-block align-text-center me-1"
          />
          FoodiesPoint
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item text-prime">
              <Link className="nav-link font-poppins text-prime active" to="/">
                <FontAwesomeIcon icon={faHome} className=" pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                Home
              </Link>
            </li>
            <li className="nav-item disabled">
            <Link className="nav-link font-poppins text-prime" to="/about">
                <FontAwesomeIcon icon={faUtensils} className="pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                About
              </Link>
            </li>
            <li className="nav-item disabled">
            <Link className="nav-link font-poppins text-prime" to="/contact">
                <FontAwesomeIcon icon={faPhone} className="pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                Contact
              </Link>
            </li>
            <li className="nav-item disabled">
            <Link className="nav-link font-poppins text-prime" to="/blogs">
                <FontAwesomeIcon icon={faBlog} className="pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
