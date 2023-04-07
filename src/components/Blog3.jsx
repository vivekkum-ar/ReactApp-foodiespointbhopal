import React from "react";
// import "./basicCss.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Outlet } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogTop from "./BlogTop";
import BlogRBar from "./BlogRBar";
import Footer from "./footer";

function Blog3() {
  return (
    <>
    <main className="container text-dark mt-3">
      <BlogTop />

      <div className="row">
        {/* Blog begins here */}
        <div className="col-md-8">
          <h2 className="blogs-page-heading blog-post-title mb-1">
            Pizza Toppings: From Classic to Crazy
          </h2>
          <p className="blog-post-meta">
            January 11, 2023 by <a href="#">FoodiesPoint</a>
          </p>
          <div>
            <p className="fw-bolder fs-5">Who doesn't love a good pizza? </p>
            Whether it's a classic margherita or a crazy combination of toppings, there's something about the crispy crust, gooey cheese, and flavorful toppings that just hits the spot. And if you're a pizza lover, you know that the toppings can make or break the pie. So why not take your taste buds on a journey and discover new and unique pizza topping combinations that will satisfy any craving, from savory to sweet? Let's explore some delicious pizza toppings that are popular in India:
            <h2 className="fs-4 py-2 font-poppins">1. Butter Chicken Pizza</h2>
            <p className="ms-3 pb-2">If you're a fan of butter chicken, you'll love this pizza. Top a classic pizza crust with a layer of butter chicken sauce, followed by shredded chicken, sliced onions, bell peppers, and plenty of mozzarella cheese. Bake until the crust is crispy and the cheese is melted and bubbly. Garnish with fresh cilantro and enjoy!</p>
            <div className="position-relative">

              <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (1).jpg" alt="A picture of a butter chicken pizza topped with shredded chicken, sliced onions, bell peppers, and plenty of mozzarella cheese" />
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                  <h2 className="text-center mb-0 fw-bolder">Butter Chicken Pizza</h2>
                  <p className="text-center">Indian-inspired, cheesy, and saucy.</p>
                </div></div></div>

            <h2 className="fs-4 py-2 font-poppins">2. Paneer Tikka Pizza</h2>
            <p className="ms-3 pb-2">Paneer tikka is a popular Indian dish made with marinated and grilled cubes of paneer (Indian cottage cheese). Why not add it to a pizza? Top a pizza crust with a layer of tomato sauce, followed by sliced onions, bell peppers, paneer tikka, and mozzarella cheese. Bake until the crust is crispy and the cheese is melted and bubbly. Garnish with fresh cilantro and enjoy!</p>
            <div className="position-relative">

              <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (5).jpg" alt="A picture of a paneer tikka pizza topped with sliced onions, bell peppers, paneer tikka, and mozzarella cheese" />
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                  <h2 className="text-center mb-0 fw-bolder">Paneer Tikka Pizza</h2>
                  <p className="text-center">Spicy, vegetarian, and flavorful.</p>
                </div></div></div>

            <h2 className="fs-4 py-2 font-poppins">3. Aloo Gobi Pizza</h2>
            <p className="ms-3 pb-2">Aloo gobi is a popular Indian dish made with potatoes and cauliflower. It's delicious as a pizza topping too! Top a pizza crust with a layer of tomato sauce, followed by sliced potatoes, cauliflower florets, sliced onions, and plenty of mozzarella cheese. Bake until the crust is crispy and the cheese is melted and bubbly. Garnish with fresh cilantro and enjoy!</p>
            <div className="position-relative">

              <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (4).jpg" alt="A picture of an aloo gobi pizza topped with sliced potatoes, cauliflower florets, sliced onions, and plenty of mozzarella cheese" />
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                  <h2 className="text-center mb-0 fw-bolder">Aloo Gobi Pizza</h2>
                  <p className="text-center">Hearty, veggie-packed, and delicious.</p>
                </div></div></div>

            <h2 className="fs-4 py-2 font-poppins">4. Chicken Tikka Masala Pizza</h2>
            <p className="ms-3 pb-2">Chicken tikka masala is a classic Indian dish that's beloved around the world. Why not turn it into a pizza topping? Top a pizza crust with a layer of tomato sauce, followed by sliced onions, bell peppers, chicken tikka masala, and mozzarella cheese. Bake until the crust is crispy and the cheese is melted and bubbly. Garnish with fresh cilantro and enjoy!</p>
            <div className="position-relative">

              <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (3).jpg" alt="A picture of a chicken tikka masala pizza topped with sliced onions, bell peppers, chicken tikka masala, and mozzarella cheese" />
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                  <h2 className="text-center mb-0 fw-bolder">Chicken Tikka Masala Pizza</h2>
                  <p className="text-center">Savory, aromatic, and exotic.</p>
                </div></div></div>

            <h2 className="fs-4 py-2 font-poppins">5. Chocolate Pizza</h2>
            <p className="ms-3 pb-2">Who doesn't love a sweet pizza for dessert? This chocolate pizza is the perfect end to any meal. Top a pizza crust with a layer of Nutella or chocolate sauce, followed by sliced bananas, strawberries, and marshmallows. Sprinkle some chocolate chips over the top and bake until the crust is crispy and the toppings are melted and gooey. Slice and serve with a dollop of whipped cream on top for a truly decadent treat.</p>
            <div className="position-relative">

              <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (5).jpg" alt="A picture of a chocolate pizza topped with sliced bananas, strawberries, marshmallows, and chocolate chips" />
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                  <h2 className="text-center mb-0 fw-bolder">Chocolate Pizza</h2>
                  <p className="text-center">Sweet, indulgent, and fruity.</p>
                </div></div></div>
            <p>These are just a few examples of the many delicious pizza toppings you can try. Don't be afraid to get creative and experiment with your own combinations. And remember, the key to a great pizza is a crispy crust, quality cheese, and fresh ingredients. Happy pizza making!</p>
          </div>


          {/* <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
              <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
            </nav> */}
        </div>

        {/* Blog ends here */}

        <BlogRBar />
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default Blog3;
