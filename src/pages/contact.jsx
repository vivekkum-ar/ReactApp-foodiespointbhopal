import "./basicCss.css";
import "animate.css";
import React, { useEffect,useRef,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Form, Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";
import emailjs from '@emailjs/browser';
import {
  faPaperPlane,
  faEnvelope,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./basicCss.css";




function Contact() {

const [showAlert, setShowAlert] = useState(false);


/* ----------------------- Fetching secrets from .env ----------------------- */
const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

/* --------------------------- EmailJS starts here -------------------------- */
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setShowAlert(true);

      // Hide the alert after 10 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 10000);

      // Reset the form after submission
    if (form.current) {
      form.current.reset();
    }
  
  };

/* ----------------------- Form validation starts here ---------------------- */
  useEffect(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    // <h1>this is the Contactpage</h1>
    <>
      {/* Display the alert if showAlert is true */}
      {showAlert && (
      <div className="d-flex justify-content-center">
      <div className="alert-container">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Submitted !</strong> We have received your input, and we'll get back to you. Please check your email.
            <button
              type="button"
              className="btn-close text-dark fs-2 pe-2 pt-2"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            >
              X
              </button>
            
          </div>
        </div>
        </div>
       )} 

      {/* Hero Section starts here */}
      <div
        style={{
          backgroundImage: `url("./images/hero2.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="animate__animated animate__fadeInDown cover-container d-flex w-100 h-100 mx-auto flex-column"
      >
        <main className="px-3 py-lg-5 contact pt-sm-2">
        <div class="p-3 m-5 blank-fix-2"></div>
        </main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-wave p-0 m-0"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L40,176C80,192,160,224,240,202.7C320,181,400,107,480,112C560,117,640,203,720,240C800,277,880,267,960,229.3C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Hero section ends here */}

      {/* Form starts here */}
      <div
        style={{ zIndex: "99" }}
        className="container d-flex justify-content-end align-items-top position-absolute top-0 end-0 mt-5"
      >
        <main className="col-md-6 px-3 py-lg-5 contact pt-sm-2">
          <div className="d-flex ps-3 fw-bolder justify-content-start">
            <p className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap fw-bolder font-poppins py-1 py-lg-2">
              Contact Us
            </p>
          </div>
          <p className="lead px-3">
            Looking for a delicious dining experience? Look no further than
            FoodiesPoint Bhopal! Our diverse menu and cozy atmosphere make us
            the perfect destination for foodies. Come visit us today!
          </p>
          <div className="d-lg-inline-flex">
            <p className="lead px-3 pt-3">
              <Link className="nav-link font-poppins text-prime" to="/about">
                <a className="btn btn-lg btn-light fw-bold border-white bg-white">
                  About us
                </a>
              </Link>
            </p>
            <p className="lead px-3 pt-3">
              <Link className="nav-link font-poppins text-prime" to="/menu">
                <a
                  href="#"
                  className="btn btn-lg btn-light fw-bold border-white bg-white"
                >
                  go to MENU
                </a>
              </Link>
            </p>
          </div>
        </main>
        <div className="col-md-7 p-5 p-xs-2 me-2 col-lg-6 text-dark fw-bolder contact-fp-div my-5">
          <h4 className="mb-3 fw-bolder display-6 font-poppins">
            Contact Form
          </h4>
          <form className="needs-validation" ref={form} onSubmit={sendEmail} noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="user_fname"
                  placeholder="First Name"
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="user_lname"
                  placeholder="Last Name"
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="contact" className="form-label">
                  Contact Number
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">+91</span>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    name="user_contact"
                    placeholder="contact"
                    required
                  />
                  <div className="invalid-feedback">
                    Your contact number is required.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="country" className="form-label">
                  Query type
                </label>
                <select className="form-select" id="country" name="user_qtype" required>
                <option value="Feedback">Feedback</option>
                <option value="Enquiry">Enquiry</option>
                <option value="Booking">Booking</option>
                <option value="Reservation">Reservation</option>
                <option value="Events">Events</option>
                <option value="">Others</option>
                </select>
                <small className="text-muted">
                  Allow us to serve you better, provide a type.
                </small>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  placeholder="you@example.com"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for updates.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  name="user_address"
                  placeholder="Apartment or suite"
                />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  placeholder="Your enquiry, message, feedback goes here"
                  name="user_message"
                  required
                  rows="3"
                ></textarea>
                <div className="invalid-feedback">
                  Please enter your enquiry, message, feedback.
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
                required
              />
              <label className="form-check-label" htmlFor="same-address">
                I can be contacted if need be.
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
                required
              />
              <label className="form-check-label" htmlFor="save-info">
                I agree with the terms and conditions as provided{" "}
                <Link to="" className="fw-bolder text-primary">
                  here
                </Link>
              </label>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-center align-items-center">
              <button className="w-50 btn btn-primary btn-lg" type="submit">
                Submit
              </button>
            </div>
          </form>
          {/* Display the alert if showAlert is true
      {showAlert && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)} />
        </div>
      )} */}
        </div>
      </div>
      {/* Form ends here */}

      <div class="p-3 m-5 blank-fix"></div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
