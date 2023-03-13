import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
import { Link } from "react-router-dom";
import "../pages/basicCss.css";
import data from "./blogslist.json";

function BlogTop() {
  return (
    <>
      <OwlCarousel
        items={1}
        className="owl-theme owl-blogs"
        loop
        nav
        margin={2}
        autoplay={false}
        animateIn={"animate__slideInRight"}
        animateOut={"animate__slideOutLeft"}
      >
                {data.items.map(item => (

                <div key={item.id} className="position-relative container">
                <Link to={item.link} className="text-white fw-bold">
          <div className="p-4 p-md-5 mb-4 rounded-5 blog-top-lg">
            <div className="col-md-6 px-0">
              <h1 className="text-uppercase pb-2 blogs-page-heading display-4 text-white fst-italic">
                {item.id + item.title}
              </h1>
              <p className="text-white lead my-3">
              {item.description}
                {/* Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what’s most interesting in this
                post’s contents. */}
              </p>
              <p className="lead fw-bold mb-0">
                  Continue reading...
              </p>
            </div>
          </div>
          <div className="px-0 h-100 w-100 d-flex justify-content-end position-absolute translate-middle-y top-50 pe-4">
          <img src="../images/hero2.jpg" alt={item.title} className="carousel-image w-50 img-fluid rounded-5"/>
            </div>
            </Link>
</div>

))}

</OwlCarousel>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                World
              </strong>
              <h3 className="blogs-page-heading mb-0 fs-3">Featured post</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width={200}
                height={250}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                Design
              </strong>
              <h3 className="blogs-page-heading mb-0 fs-3">Post title</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width={200}
                height={250}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogTop;
