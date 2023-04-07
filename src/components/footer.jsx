import '../pages/basicCss.css';
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
<footer className="footer-section">
        <div className="container-flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,160L40,176C80,192,160,224,240,202.7C320,181,400,107,480,112C560,117,640,203,720,240C800,277,880,267,960,229.3C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <div className="container">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30 d-flex ms-xs-1 pb-xs-2 justify-content-lg-center">
                  <div
                    className="single-cta d-flex align-content-top"
                    style={{ width: "max-content" }}
                  >
                    <FontAwesomeIcon icon={faHome} className="fs-1 pb-1" />
                    <div className="cta-text">
                      <h4>Visit us</h4>
                      <span>
                        Opposite Samarth Parisar Rohit Nagar, <br />
                        Bawadiya Kalan, Salaiya, Bhopal 462039
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30 d-flex ms-xs-1 pb-xs-2 justify-content-lg-center">
                  <div className="single-cta">
                    <FontAwesomeIcon icon={faPhone} className="fs-1 pb-1" />
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>7580801800</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30 d-flex ms-xs-1 pb-xs-2 justify-content-lg-center">
                  <div className="single-cta">
                    <FontAwesomeIcon icon={faEnvelope} className="fs-1 pb-1" />
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>foodiespointbhopal@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget ps-md-3">
                    <div className="footer-logo">
                      <a href="index.html">
                        <Link
                          className="fs-4 font-poppins fw-bold text-prime-gradient navbar-brand"
                          to="/"
                        >
                          <img
                            src="/images/logo-navbar.png"
                            alt=""
                            width="50"
                            height="24"
                            className="d-inline-block align-text-center me-1"
                          />
                          FoodiesPoint
                        </Link>
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>
                        We invite you to visit our restaurant and experience the
                        authentic flavors of our cuisine, warm hospitality, and
                        cozy atmosphere. Our diverse menu, exceptional service,
                        and attention to detail will make your visit
                        unforgettable. We look forward to serving you soon!
                      </p>
                    </div>
                    <div className="footer-social-icon">
                      <span>Follow us</span>
                      <div className="d-flex align-self-start bd-highlight">
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
                        <div className="px-2 pt-1 bd-highlight">
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
                                fill="#fff"
                                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                              ></path>
                              <circle
                                cx="31.5"
                                cy="16.5"
                                r="1.5"
                                fill="#fff"
                              ></circle>
                              <path
                                fill="#fff"
                                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                              ></path>
                            </svg>
                          </Link>
                        </div>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30"></div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <Link
                          className="nav-link font-poppins text-prime"
                          to="/"
                        >
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link font-poppins text-prime"
                          to="/about"
                        >
                          <a>about</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">services</a>
                      </li>
                      <li>
                        <a href="#">portfolio</a>
                      </li>
                      <li>
                        <Link
                          className="nav-link font-poppins text-prime"
                          to="/contact"
                        >
                          <a>Contact</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link font-poppins text-prime"
                          to="/about"
                        >
                          <a>About us</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">Expert Team</a>
                      </li>
                      <li>
                        <Link
                          className="nav-link font-poppins text-prime"
                          to="/contact"
                        >
                          <a>Contact us</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link font-poppins text-prime"
                          to="/blogs"
                        >
                          <a>Blogs</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
               </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2023, All Right Reserved{" "}
                    <a href="/">FoodiesPointBhopal</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-flex justify-content-end pe-5">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
    }

export default Footer;