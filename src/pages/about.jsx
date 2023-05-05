import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function About() {
  return (
    <>
      <div className="text-center text-black">
        <div className="container-flex">
          <div className="d-flex justify-content-center">
            <div
              style={{
                fontSize: "13rem",
                Repeat: "no-backgroundrepeat",
                backgroundSize: "cover",
                backgroundImage: `url('./images/gal (1).avif')`,
              }}
              className="col mb-5"
            >
              <h1
                className="text-white text-about fw-bold font-poppins"
                style={{ fontSize: "13rem" }}
              >
                ABOUT US
              </h1>
            </div>
          </div>
        </div>
        <Link
          className="text-prime-gradient fw-bolder display-5 lh-1 border-bottom text-wrap font-poppins py-1 py-lg-2"
          to="/"
        >
          FoodiesPoint
        </Link>
        <div className="mt-5">
          {/* Tabs navs starts here */}
          <div className="d-flex justify-content-center">
            <ul
              className="nav nav-justified mb-3 col-md-6"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="ex3-tab-1"
                  data-bs-toggle="tab"
                  href="#ex3-tabs-1"
                  role="tab"
                  aria-controls="ex3-tabs-1"
                  aria-selected="true"
                >
                  Our Story
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="ex3-tab-2"
                  data-bs-toggle="tab"
                  href="#ex3-tabs-2"
                  role="tab"
                  aria-controls="ex3-tabs-2"
                  aria-selected="false"
                >
                  Our Mission
                </button>
              </li>
            </ul>
          </div>
          {/* Tabs navs ends here */}
          {/* Tabs content starts here */}
          <div
            className="tab-content d-flex justify-content-center mb-5"
            id="ex2-content"
          >
            <div
              className="tab-pane col-md-4 fade show active"
              id="ex3-tabs-1"
              role="tabpanel"
              aria-labelledby="ex3-tab-1"
            >
              <h2 className="fs-4 font-poppins fw-bolder pb-2 border-bottom mb-2 text-prime-gradient">
                Our Story
              </h2>
              <p className="justify-center-text">
                FoodiesPoint was founded by two friends who had a passion for
                cooking and wanted to bring the flavors of India to the world.
                Starting with just a small kitchen and a handful of recipes,
                they worked hard to perfect their dishes and create a menu that
                would satisfy even the most discerning palate.
              </p>
              <p className="justify-center-text">
                Today, FoodiesPoint - Bhopal is serving up a variety of classic
                Indian dishes along with some modern twists.
              </p>
            </div>
            <div
              className="tab-pane col-md-4 fade"
              id="ex3-tabs-2"
              role="tabpanel"
              aria-labelledby="ex3-tab-2"
            >
              <h2 className="fs-4 font-poppins fw-bolder pb-2 border-bottom mb-2 text-prime-gradient">
                Our Mission
              </h2>
              <p className="justify-center-text">
                At FoodiesPoint, our mission is simple: to provide our customers
                with the best possible dining experience. We use only the
                freshest ingredients in our dishes, and our chefs are trained to
                the highest standards to ensure that every plate that leaves our
                kitchen is perfect.
              </p>
              <p className="justify-center-text">
                We are committed to providing excellent service, and we strive
                to make every visit to our restaurant a memorable one.
              </p>
            </div>
          </div>
          {/* Tabs content ends here */}

          <div className="d-flex justify-content-center">
            <p className="text-prime-gradient fw-bolder display-5 lh-1 border-bottom text-wrap font-poppins py-1 py-lg-2">
              Background
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-md-8 py-5">
              <p className="justify-center-text">
                In addition to our delicious menu items, we want to give you a
                little bit of background about our restaurant. Our mission is to
                provide high-quality food and exceptional service to all of our
                customers. We take great pride in our selection of dishes, which
                are made with fresh and locally sourced ingredients. Our chefs
                work hard to create innovative and flavorful meals that are sure
                to satisfy your cravings.
              </p>
              <br />
              <p className="justify-center-text">
                At our restaurant, we strive to create a warm and welcoming
                atmosphere where you can enjoy a great meal with friends and
                family. We believe that dining out is more than just eating food
                - it's about creating lasting memories and experiences. That's
                why we make it our goal to provide excellent service and a
                comfortable setting that will make you want to come back for
                more.
              </p>
              <br />
              <p className="justify-center-text">
                Whether you're in the mood for something spicy, savory, or
                sweet, we've got something for everyone on our menu. From
                classic Indian dishes like Kadhai Paneer and Chole Bhature to
                fusion favorites like Veg Cheese Alfredo White Pasta and Cheese
                Corn Sandwich, we're confident that you'll find something you
                love.
              </p>
              <br />
              <p className="fw-bolder">
                Thank you for choosing our restaurant for your dining
                experience. We look forward to serving you soon!
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
