import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
import { Link } from "react-router-dom";
import "../pages/basicCss.css";
import data from "./blogslist.json";
import LinesEllipsis from "react-lines-ellipsis";

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
          <div className="p-4 rounded-5 blog-top-lg">
            <div className="col-md-6 ps-3">
              <h1 className="text-uppercase pb-2 blogs-page-heading display-4 text-white fst-italic">
                {item.title}
              </h1>
              {/* <p className="text-white lead my-3"> */}
              <LinesEllipsis
              className="text-white lead mt-3"
              text={item.description}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
                {/* Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what’s most interesting in this
                post’s contents. */}
              {/* </p> */}
              <p className="lead fw-bold mt-3">
                  Continue reading...
              </p>
            </div>
          </div>
          <div className="px-0 h-100 w-100 d-flex justify-content-end position-absolute translate-middle-y top-50 pe-4">
          <img src={item.image} alt={item.title} className="carousel-image w-50 img-fluid rounded-5"/>
            </div>
            </Link>
</div>

))}

</OwlCarousel>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                Health
              </strong>
              <h3 className="blogs-page-heading mb-0 fs-3">Health & Food</h3>
              <div className="mb-1 text-muted">Dec 12</div>
              <p className="card-text mb-auto">
              The surprising health benefits of ingredients used in our dishes, from anti-inflammatory garlic to nutrient-rich mixed vegetables
              </p>
              <Link to={"/blogs"} className="stretched-link fw-bold text-success">
                Continue reading...
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img src="/images/blog1/blog1 (1).png" alt="" aria-label="Placeholder: Thumbnail" style={{height:"100%"}} width={200} className="bd-placeholder-img"/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2" style={{color:"#FA6c00"}}>
                Design
              </strong>
              <h3 className="blogs-page-heading mb-0 fs-3">Classic to Crazy toppings</h3>
              <div className="mb-1 text-muted">Jan 11</div>
              <p className="mb-auto">
              Take your taste buds on a journey and discover new and unique pizza topping combinations that will satisfy any craving.
              </p>
              <Link to={"/blogs/blog3"} className="stretched-link fw-bold" style={{color:"#FA6c00"}}>
                Continue reading...
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src="/images/blog1/blog3 (1).jpg" alt="" aria-label="Placeholder: Thumbnail" style={{height:"100%"}} width={200} className="bd-placeholder-img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogTop;
