import './basicCss.css';
import 'animate.css';
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import LinesEllipsis from 'react-lines-ellipsis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    useEffect(() => {
        'use strict';
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }
      
              form.classList.add('was-validated');
            }, false);
          });
      }, []);
      
    return (
        // <h1>this is the Contactpage</h1>
        <>
         {/* Hero Section starts here */}
         <div style={{backgroundImage: `url("./images/hero2.png")`,backgroundRepeat: "no-repeat",backgroundSize:"cover"}} className="animate__animated animate__fadeInDown cover-container d-flex w-100 h-100 mx-auto flex-column">
        
        <main className="px-3 py-lg-5 pt-sm-2">
        <div className="d-flex ps-3 fw-bolder justify-content-start">
        <p className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap fw-bolder font-poppins py-1 py-lg-2">Contact Us</p>
        </div>
          <p className="lead px-3 width-100-sm">Looking for a delicious dining experience? Look no further than FoodiesPoint Bhopal! Our diverse menu and cozy atmosphere make us the perfect destination for foodies. Come visit us today!</p>
          <div className="d-lg-inline-flex">
          <p className="lead px-3 pt-3">
          <Link className="nav-link font-poppins text-prime" to="/about">
            <a className="btn btn-lg btn-light fw-bold border-white bg-white">About us</a>
            </Link>
          </p>
          <p className="lead px-3 pt-3">
          <Link className="nav-link font-poppins text-prime" to="/menu"> 
            <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">go to MENU</a>
            </Link>
          </p>
          </div>
        </main>
<svg xmlns="http://www.w3.org/2000/svg" className='svg-wave p-0 m-0' viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L40,176C80,192,160,224,240,202.7C320,181,400,107,480,112C560,117,640,203,720,240C800,277,880,267,960,229.3C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
      
{/* Hero section ends here */}


<div className="col-md-7 col-lg-8 text-dark">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder required />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder required />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="contact" className="form-label">Contact Number</label>
              <div className="input-group has-validation">
                <span className="input-group-text">+91</span>
                <input type="tel" className="form-control" id="contact" placeholder="contact" required />
                <div className="invalid-feedback">
                  Your contact number is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <input type="text" className="form-control" id="message" placeholder="1234 Main St" required />
              <div className="invalid-feedback">
                Please enter your shipping message.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
            </div>
            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country" required>
                <option value>Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <select className="form-select" id="state" required>
                <option value>Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder required />
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address" />
            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info" />
            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
          </div>
          <hr className="my-4" />
          <h4 className="mb-3">Payment</h4>
          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
              <label className="form-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
              <label className="form-check-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
              <label className="form-check-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder required />
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder required />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder required />
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder required />
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
        </>

    );
}

export default Contact;