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
import Footer from "./footer";
import BlogRBar from "./BlogRBar";

function Blog4() {
  return (
    <>
<main className="container text-dark mt-3">
      <BlogTop />

      <div className="row">
        {/* Blog begins here */}
        <div className="col-md-8 ps-5">
          <h2 className="blogs-page-heading blog-post-title mb-1">
          5 Healthy Snacks for School
          </h2>
          <p className="blog-post-meta">
            January 29, 2023 by <a href="#">FoodiesPoint</a>
          </p>
          <p className="my-3">
          As a chef, I know how important it is to provide nutritious and tasty snacks for kids, especially when they're at school. With the rise of unhealthy snack options, it's crucial to find healthy alternatives that can keep them fueled and energized throughout the day.
          </p>
          <p className="my-3">
          That's why I've put together a list of 5 healthy snacks that are perfect for school. These snacks are easy to prepare, packed with nutrients, and most importantly, delicious. As a parent, I understand the importance of providing healthy options for my child, and I hope that these snack ideas can inspire you to do the same for your little ones.
          </p>
          <h2 className="fs-4 py-2 font-poppins">1. Roasted Chana (Spicy Chickpeas)</h2>
          <p className="ms-3 pb-2">Roasted chana is a classic Indian snack that is both spicy and crunchy. Chickpeas are a great source of protein and fiber, making them a filling snack that will keep you going until your next meal. To make roasted chana, simply rinse a can of chickpeas and dry them with a paper towel. Toss them in a mixture of spices such as chili powder, cumin, coriander, and salt. Then, roast them in the oven at 350°F for about 30 minutes, or until crispy. Pack them in a small container or Ziploc bag for a tasty and healthy snack.</p>
          <div className="position-relative">

            <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (1).jpg" alt="A picture of a butter chicken pizza topped with shredded chicken, sliced onions, bell peppers, and plenty of mozzarella cheese" />
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                <h2 className="text-center mb-0 fw-bolder">Butter Chicken Pizza</h2>
                <p className="text-center">Spicy roasted chickpeas snack.</p>
              </div></div></div>

          <h2 className="fs-4 py-2 font-poppins">2. Masala Dosa Bites</h2>
          <p className="ms-3 pb-2">Dosa is a popular Indian breakfast food, but it can also make a great snack. To make dosa bites, prepare a regular dosa batter by soaking rice and urad dal for a few hours and blending them into a smooth paste. Add salt to taste and let the batter ferment overnight. Then, heat a non-stick pan and pour a small ladleful of batter onto it. Cook it on medium heat until the edges start to turn brown. Add a spoonful of potato masala in the center and fold the dosa in half. Cut it into bite-sized pieces and pack them in a small container for a nutritious and delicious snack.</p>
          <div className="position-relative">

            <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (5).jpg" alt="A picture of a Masala Dosa Bites topped with sliced onions, bell peppers, paneer tikka, and mozzarella cheese" />
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                <h2 className="text-center mb-0 fw-bolder">Masala Dosa Bites</h2>
                <p className="text-center">Miniature South Indian crepes.</p>
              </div></div></div>

          <h2 className="fs-4 py-2 font-poppins">3. Fruit Chaat (Fruit Salad)</h2>
          <p className="ms-3 pb-2">Fruit chaat is a refreshing and healthy snack that is perfect for school. Cut up your favorite fruits such as apples, bananas, oranges, and pomegranates into bite-sized pieces. Toss them with a sprinkle of chaat masala and a squeeze of lemon juice. Chaat masala is a tangy spice blend that can be found at most Indian grocery stores. Pack the fruit chaat in a small container for a sweet and healthy snack that will keep you energized throughout the day.</p>
          <div className="position-relative">

            <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (4).jpg" alt="A picture of an Fruit Chaat (Fruit Salad) topped with sliced potatoes, cauliflower florets, sliced onions, and plenty of mozzarella cheese" />
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                <h2 className="text-center mb-0 fw-bolder">Fruit Chaat (Fruit Salad)</h2>
                <p className="text-center">Colorful mixed fruit salad.</p>
              </div></div></div>

          <h2 className="fs-4 py-2 font-poppins">4. Poha (Flattened Rice)</h2>
          <p className="ms-3 pb-2">Poha is a light and nutritious snack that can be made in minutes. Rinse 1 cup of flattened rice (poha) in a colander and set it aside. Heat oil in a pan and add mustard seeds, cumin seeds, curry leaves, and chopped green chilies. Add diced onions and sauté until they turn translucent. Add the rinsed poha, salt, and turmeric powder. Mix everything together and cook for a few minutes. Poha is a great source of carbohydrates and can keep you full for a long time. Pack it in a small container for a tasty and healthy snack.</p>
          <div className="position-relative">

            <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (3).jpg" alt="A picture of a Poha (Flattened Rice) topped with sliced onions, bell peppers, chicken tikka masala, and mozzarella cheese" />
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                <h2 className="text-center mb-0 fw-bolder">Poha (Flattened Rice)</h2>
                <p className="text-center">Flattened rice breakfast dish.</p>
              </div></div></div>

          <h2 className="fs-4 py-2 font-poppins">5. Paneer Roll with Soya Chaap Roll</h2>
          <p className="ms-3 pb-2">Paneer is a popular Indian cheese that is often used in vegetarian dishes. For a healthier and equally tasty alternative, try a soya chaap roll instead. Soya chaap is a protein-rich vegetarian food made from soybeans, and it can be marinated and cooked in a similar way to paneer. To make a soya chaap roll, marinate the soya chaap in a mixture of spices such as ginger, garlic, cumin, coriander, and garam masala. Then, grill or bake the soya chaap until golden brown. Place it on a roti or paratha along with some sliced onions, tomatoes, and chutney. Roll it up and pack it in a small container for a delicious and healthy snack.</p>
          <div className="position-relative">

            <div className="d-flex justify-content-center"><img className="h-50 w-50 img-fluid d-flex justify-content-center" src="/images/blog1/blog3 (5).jpg" alt="A picture of a Paneer Roll with Soya Chaap Roll topped with sliced bananas, strawberries, marshmallows, and chocolate chips" />
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                <h2 className="text-center mb-0 fw-bolder">Paneer Roll with Soya Chaap Roll</h2>
                <p className="text-center">Vegetarian protein-packed rolls. </p>
              </div></div></div>
              <p>
              In conclusion, whether you're a chef or a parent, providing healthy snacks is essential for the growth and development of children. With these 5 snack ideas, you can ensure that your child is getting the right nutrients they need to stay focused and energized in school. So, get creative in the kitchen and try out these snacks for a fun and healthy twist on snack time.
              </p>
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

export default Blog4;
