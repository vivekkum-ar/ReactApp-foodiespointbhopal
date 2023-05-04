import React from 'react';
import "../index.css";
import { Link } from "react-router-dom";
import Footer from '../components/footer';

function About() {
    return (
        <>
        <div className="text-center text-black">
            <div className="container-flex">
                <div className="d-flex justify-content-center">
                    <div style={{ fontSize: "13rem",Repeat: "no-backgroundrepeat",backgroundSize:"cover" ,backgroundImage: `url('./images/gal (1).avif')`}}  className="col mb-5">
                        <h1 className='text-white text-about fw-bold font-poppins' style={{ fontSize: "13rem"}}>ABOUT US</h1>
                    </div>
                </div>
            </div>
            <Link className="font-poppins fw-bold fs-1 text-prime-gradient navbar-brand" to="/">
                FoodiesPoint
            </Link>
            <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
            <div className="col-lg-6 mx-auto">
                <p className="lead fs-6 my-3 mb-4">Oops, it looks like you've taken a wrong turn somewhere! You might be feeling lost and hungry, but don't worry, you're not alone. Just follow the aroma of delicious food and it will lead you back to FoodiesPoint, where our chefs are always cooking up something tasty. In the meantime, feel free to check out our mouth-watering menu and start planning your next visit.</p>
                <p class="lead text-center">Welcome to FoodiesPoint, the best Indian restaurant in Bhopal!</p>
    <div class="row my-5">
      <div class="col-md-6">
        <h2>Our Story</h2>
        <p>FoodiesPoint was founded by two friends who had a passion for cooking and wanted to bring the flavors of India to the world. Starting with just a small kitchen and a handful of recipes, they worked hard to perfect their dishes and create a menu that would satisfy even the most discerning palate.</p>
        <p>Today, FoodiesPoint is one of the most popular restaurants in Bhopal, serving up a variety of classic Indian dishes along with some modern twists.</p>
      </div>
      <div class="col-md-6">
        <h2>Our Mission</h2>
        <p>At FoodiesPoint, our mission is simple: to provide our customers with the best possible dining experience. We use only the freshest ingredients in our dishes, and our chefs are trained to the highest standards to ensure that every plate that leaves our kitchen is perfect.</p>
        <p>We are committed to providing excellent service, and we strive to make every visit to our restaurant a memorable one.</p>
      </div>
    </div>
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
            <Footer></Footer>
        </>

    );
}

export default About;