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
            Customize this section to tell your visitors a little bit about your
            publication, writers, content, or something else entirely. Totally
            up to you.
          </p>
        </div>
        <div className="p-4">
          <h4 className="blogs-page-heading fst-italic fs-3">Archives</h4>
          <ol
            style={{ listStyleType: "decimal" }}
            className="list-unstyled mb-0"
          >
            <li>
              <a href="#">March 2021</a>
            </li>
            <li>
              <a href="#">February 2021</a>
            </li>
            <li>
              <a href="#">January 2021</a>
            </li>
            <li>
              <a href="#">December 2020</a>
            </li>
            <li>
              <a href="#">November 2020</a>
            </li>
            <li>
              <a href="#">October 2020</a>
            </li>
            <li>
              <a href="#">September 2020</a>
            </li>
            <li>
              <a href="#">August 2020</a>
            </li>
            <li>
              <a href="#">July 2020</a>
            </li>
            <li>
              <a href="#">June 2020</a>
            </li>
            <li>
              <a href="#">May 2020</a>
            </li>
            <li>
              <a href="#">April 2020</a>
            </li>
          </ol>
        </div>
        <div className="p-4">
          <h4 className="blogs-page-heading fst-italic">Elsewhere</h4>
          <ol style={{ listStyleType: "decimal" }} className="list-unstyled">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BlogRBar;
