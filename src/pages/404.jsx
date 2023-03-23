import { Link } from "react-router-dom";
import React from 'react';

function NoPage() {
    return (
        <div className="px-4 text-dark py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="/images/logo-navbar.png" alt="" width={82} height={67} />
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
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
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