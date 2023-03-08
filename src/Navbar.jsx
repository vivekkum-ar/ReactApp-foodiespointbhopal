import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faList, faBlog, faBurger, faCheckSquare, faCoffee, faHome, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

library.add(faHome,faBlog,faCheckSquare,faUtensils,faPhone)

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top bg-light  py-0 my-0">
      <div className="container-fluid">
        <Link className="font-poppins fw-bold fs-2 text-prime-gradient navbar-brand" to="/">
          <img
            src="/images/logo-navbar.png"
            alt=""
            width="60"
            height="28" 
            // onClick={() => startLoading(progress + 50)} 
            className="d-inline-block  align-text-center me-1"
          />
          FoodiesPoint
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item text-prime">
              <Link className="nav-link border-end hover border-1 font-poppins fs-5 text-prime active" to="/">
                <FontAwesomeIcon icon={faHome} className="fs-4 pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                Home
              </Link>
            </li>
            <li className="nav-item text-prime">
            <Link className="nav-link border-end hover active border-1 font-poppins fs-5 text-prime" to="/about">
                <FontAwesomeIcon icon={faUtensils} className="fs-4 pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                About
              </Link>
            </li>
            <li className="nav-item text-prime">
            <Link className="nav-link border-end hover active border-1 font-poppins fs-5 text-prime" to="/menu">
                <FontAwesomeIcon icon={faList} className="fs-4 pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                Menu
              </Link>
            </li>
            <li className="nav-item text-prime">
            <Link className="nav-link border-end hover active border-1 font-poppins fs-5 text-prime" to="/contact">
                <FontAwesomeIcon icon={faPhone} className="fs-4 pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                Contact
              </Link>
            </li>
            <li className="nav-item text-prime">
            <Link className="nav-link font-poppins active fs-5 text-prime" to="/blogs">
                <FontAwesomeIcon icon={faBlog} className="fs-4 pe-1" />
                {/* Alternatively, <FontAwesomeIcon icon="fa-solid fa-home"> */}
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        // style={{transform:`translate(0%,2300%)`}}
        onLoaderFinished={() => setProgress(0)}
      /> */}
    </nav>
  );
}

export default Navbar;
