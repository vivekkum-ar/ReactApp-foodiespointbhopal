import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import "../pages/basicCss.css";

function BlogRBar() {
  return (
    <div className="col-md-4">
      <div className="position-sticky" style={{ top: "2rem" }}>
        <div className="p-4 mb-3 bg-light rounded">
          <h4 className="blogs-page-heading fst-italic fs-3 mt-3">About</h4>
          <p className="mb-0">
          Welcome to our publication! Our blog features reviews, recipes, tips, and stories from our passionate team of foodies. Join us as we explore the best of Bhopal's culinary scene and share our love for food with you.
          </p>
        </div>
        <div className="p-4">
          <h4 className="blogs-page-heading fst-italic fs-3">Archives</h4>
          <ol
            style={{ listStyleType: "decimal" }}
            className="list-unstyled mb-0"
          >
            <li>
              <Link to="#">March 2023</Link>
            </li>
            <li>
              <Link to="#">February 2023</Link>
            </li>
            <li>
              <Link to="#">January 2023</Link>
            </li>
            <li>
              <Link to="#">December 2022</Link>
            </li>
            <li>
              <Link to="#">November 2022</Link>
            </li>
            <li>
              <Link to="#">October 2022</Link>
            </li>
            <li>
              <Link to="#">September 2022</Link>
            </li>
            <li>
              <Link to="#">August 2022</Link>
            </li>
            <li>
              <Link to="#">July 2022</Link>
            </li>
            <li>
              <Link to="#">June 2022</Link>
            </li>
            <li>
              <Link to="#">May 2022</Link>
            </li>
            <li>
              <Link to="#">April 2022</Link>
            </li>
          </ol>
        </div>
        <div className="p-4">
          <h4 className="blogs-page-heading fs-3 fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li>
            <div className="p-1 bd-highlight">
                          <Link
                            className="nav-link font-poppins text-prime"
                            to="https://www.facebook.com/foodiespointbhopal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="40"
                              height="40"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#039be5"
                                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                              ></path>
                            </svg>
                          </Link>
                        </div>
            </li>
            <li>
            <div className="px-0 pt-2 bd-highlight">
                          <Link
                            className="nav-link font-poppins text-prime"
                            to="https://www.instagram.com/foodiespointbhopal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                            >
                              <radialGradient
                                id="yOrnnhliCrdS2gy~4tD8ma"
                                cx="19.38"
                                cy="42.035"
                                r="44.899"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#fd5"></stop>
                                <stop offset=".328" stop-color="#ff543f"></stop>
                                <stop offset=".348" stop-color="#fc5245"></stop>
                                <stop offset=".504" stop-color="#e64771"></stop>
                                <stop offset=".643" stop-color="#d53e91"></stop>
                                <stop offset=".761" stop-color="#cc39a4"></stop>
                                <stop offset=".841" stop-color="#c837ab"></stop>
                              </radialGradient>
                              <path
                                fill="url(#undefined)"
                                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                              ></path>
                              <radialGradient
                                id="yOrnnhliCrdS2gy~4tD8mb"
                                cx="11.786"
                                cy="5.54"
                                r="29.813"
                                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#4168c9"></stop>
                                <stop
                                  offset=".999"
                                  stop-color="#4168c9"
                                  stop-opacity="0"
                                ></stop>
                              </radialGradient>
                              <path
                                fill="url(#undefined)"
                                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                              ></path>
                              <path
                                fill="#000"
                                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                              ></path>
                              <circle
                                cx="31.5"
                                cy="16.5"
                                r="1.5"
                                fill="#000"
                              ></circle>
                              <path
                                fill="#000"
                                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                              ></path>
                            </svg>
                          </Link>
                        </div>
            </li>
            <li>
            <div className="p-2 bd-highlight">
                          {" "}
                          <a
                            className="nav-link font-poppins text-prime"
                            href="mailto:foodiespointbhopal@gmail.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="38"
                              height="38"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#4caf50"
                                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                              ></path>
                              <path
                                fill="#1e88e5"
                                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                              ></path>
                              <polygon
                                fill="#e53935"
                                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                              ></polygon>
                              <path
                                fill="#c62828"
                                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                              ></path>
                              <path
                                fill="#fbc02d"
                                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                              ></path>
                            </svg>
                          </a>
                        </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BlogRBar;
