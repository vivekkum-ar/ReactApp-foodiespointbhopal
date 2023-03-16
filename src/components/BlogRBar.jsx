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
          Welcome to our publication! We're a team of passionate writers dedicated to bringing you quality content. From food to fashion, we cover it all. Stay tuned for our latest articles.
          </p>
        </div>
        <div className="p-4">
          <h4 className="blogs-page-heading fst-italic fs-3">Archives</h4>
          <ol
            style={{ listStyleType: "decimal" }}
            className="list-unstyled mb-0"
          >
            <li>
              <Link to="#">March 2021</Link>
            </li>
            <li>
              <Link to="#">February 2021</Link>
            </li>
            <li>
              <Link to="#">January 2021</Link>
            </li>
            <li>
              <Link to="#">December 2020</Link>
            </li>
            <li>
              <Link to="#">November 2020</Link>
            </li>
            <li>
              <Link to="#">October 2020</Link>
            </li>
            <li>
              <Link to="#">September 2020</Link>
            </li>
            <li>
              <Link to="#">August 2020</Link>
            </li>
            <li>
              <Link to="#">July 2020</Link>
            </li>
            <li>
              <Link to="#">June 2020</Link>
            </li>
            <li>
              <Link to="#">May 2020</Link>
            </li>
            <li>
              <Link to="#">April 2020</Link>
            </li>
          </ol>
        </div>
        <div className="p-4">
          <h4 className="blogs-page-heading fst-italic">Elsewhere</h4>
          <ol style={{ listStyleType: "decimal" }} className="list-unstyled">
            <li>
              <Link to="#">GitHub</Link>
            </li>
            <li>
              <Link to="#">Twitter</Link>
            </li>
            <li>
              <Link to="#">Facebook</Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BlogRBar;
