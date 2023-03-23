import { Link } from "react-router-dom";
import React from 'react';

function NoPage() {
    return (
        <div className="px-4 text-dark py-5 my-1 text-center">
            <div className="container">
              <div className="row justify-content-center">
    <div style={{fontSize:"70px"}} className="col fw-bolder d-flex justify-content-end align-self-center">
      4
    </div>
    <img style={{maxWidth: "79px",maxHeight: "79px"}} className="col align-self-center d-block m-0 p-0 border border-dark border-5 rounded-circle" src="/images/logo-navbar.png" alt=""/>
    <div style={{fontSize:"70px"}} className="col fw-bolder align-self-center d-flex justify-content-start">
      4
    </div>
  </div>
  </div>
            {/* <img
            src="/images/logo-navbar.png"
            alt=""
            width="60"
            height="28" 
            // onClick={() => startLoading(progress + 50)} 
            className="d-inline-block  align-text-center me-1"
          /> */}
            <Link className="font-poppins fw-bold fs-1 text-prime-gradient navbar-brand" to="/">
                FoodiesPoint
            </Link>
            <div className="col-lg-6 mx-auto">
                <p className="lead fs-6 my-3 mb-4">Oops, it looks like you've taken a wrong turn somewhere! You might be feeling lost and hungry, but don't worry, you're not alone. Just follow the aroma of delicious food and it will lead you back to FoodiesPoint, where our chefs are always cooking up something tasty. In the meantime, feel free to check out our mouth-watering menu and start planning your next visit.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link className="" to="/">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Return Home</button>
                    </Link>
                    <Link className="" to="/menu">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Go to Menu</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NoPage;