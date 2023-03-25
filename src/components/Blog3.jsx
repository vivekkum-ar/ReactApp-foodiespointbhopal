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

function Blog3() {
  return (
    <main className="container text-dark mt-3">
      <BlogTop />

      <div className="row g-5">
      {/* Blog begins here */}
        <div className="col-md-8 ps-5">
        <h2 className="blogs-page-heading blog-post-title mb-1">
        Pizza Toppings: From Classic to Crazy
              </h2>
              <p className="blog-post-meta">
                January 1, 2023 by <a href="#">FoodiesPoint</a>
              </p>
    <div>
      <p className="fw-bolder fs-5">Who doesn't love a good pizza? </p>
      Whether it's a classic margherita or a crazy combination of toppings, there's something about the crispy crust, gooey cheese, and flavorful toppings that just hits the spot. And if you're a pizza lover, you know that the toppings can make or break the pie. So why not take your taste buds on a journey and discover new and unique pizza topping combinations that will satisfy any craving, from savory to sweet? Let's explore some delicious pizza toppings that are popular in India:
      <h2 className="fs-4 font-poppins">1. Butter Chicken Pizza</h2>
      <p className="ms-3">If you're a fan of butter chicken, you'll love this pizza. Top a classic pizza crust with a layer of butter chicken sauce, followed by shredded chicken, sliced onions, bell peppers, and plenty of mozzarella cheese. Bake until the crust is crispy and the cheese is melted and bubbly. Garnish with fresh cilantro and enjoy!</p>

      <h2 className="fs-4 font-poppins">2. Paneer Tikka Pizza</h2>
      <p className="ms-3">Paneer tikka is a popular Indian dish made with marinated and grilled cubes of paneer (Indian cottage cheese). Why not add it to a pizza? Top a pizza crust with a layer of tomato sauce, followed by sliced onions, bell peppers, paneer tikka, and mozzarella cheese. Bake until the crust is crispy and the cheese is melted and bubbly. Garnish with fresh cilantro and enjoy!</p>

      <h2 className="fs-4 font-poppins">3. Aloo Gobi Pizza</h2>
      <p className="ms-3">Aloo gobi is a popular Indian dish made with potatoes and cauliflower. It's delicious as a pizza topping too! Top a pizza crust with a layer of tomato sauce, followed by sliced potatoes, cauliflower florets, sliced onions, and plenty of mozzarella cheese. Bake until the crust is crispy and the cheese is melted and bubbly. Garnish with fresh cilantro and enjoy!</p>

      <h2 className="fs-4 font-poppins">4. Chicken Tikka Masala Pizza</h2>
      <p className="ms-3">Chicken tikka masala is a classic Indian dish that's beloved around the world. Why not turn it into a pizza topping? Top a pizza crust with a layer of tomato sauce, followed by sliced onions, bell peppers, chicken tikka masala, and mozzarella cheese. Bake until the crust is crispy and the cheese is melted and bubbly. Garnish with fresh cilantro and enjoy!</p>

      <h2 className="fs-4 font-poppins">5. Chocolate Pizza</h2>
      <p className="ms-3">Who doesn't love a sweet pizza for dessert? This chocolate pizza is the perfect end to any meal. Top a pizza crust with a layer of Nutella or chocolate sauce, followed by sliced bananas, strawberries, and marshmallows. Sprinkle some chocolate chips over the top and bake until the crust is crispy and the toppings are melted and gooey. Slice and serve with a dollop of whipped cream on top for a truly decadent treat.</p>
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
  );
}

export default Blog3;
