import React from "react";
import "../pages/basicCss.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Outlet } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogTop from "./BlogTop";
import BlogRBar from "./BlogRBar";
import Footer from "../components/footer";

function Blog2() {
  return (
    <>
      <main className="container text-dark mt-3">
        <BlogTop />

        <div className="row">
          {/* Blog begins here */}
          <div className="col-md-8 ">
            <div>
        <h2 className="blogs-page-heading blog-post-title mb-1">
        5 Easy and Delicious Recipes
            </h2>
            <p className="blog-post-meta">
              January 1, 2023 by <a href="#">FoodiesPoint</a>
            </p>
        <h1>5 Easy and Delicious Indian Recipes to Make With Your Friends at Your Next Sleepover Party</h1>
      <p>Hosting a sleepover party with your friends? Impress them with these easy-to-make, delicious Indian recipes that are perfect for a fun night in!</p>
      <h2 className="fs-4 font-poppins">1. Vegetable Samosas</h2>
      <ol style={{ listStyleType: "disc" }} className="ms-5">
        <li>1 package frozen puff pastry, thawed</li>
        <li>2 cups mixed vegetables (peas, carrots, potatoes), boiled and mashed</li>
        <li>1/2 tsp cumin seeds</li>
        <li>1/2 tsp coriander seeds</li>
        <li>1/2 tsp garam masala</li>
        <li>1/2 tsp red chili powder</li>
        <li>1/2 tsp turmeric powder</li>
        <li>1/2 tsp amchur (dried mango powder)</li>
        <li>Salt to taste</li>
        <li>Oil for frying</li>
      </ol>
                <div className="position-relative">
      
      <div className="d-flex justify-content-center">
      <img src="/images/blog1/blog2 (2).png" alt="Aloo Tikki Burgers" className="h-50 w-50 img-fluid d-flex justify-content-center"/>
            <div  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                      <h2 className="text-center mb-0 fw-bolder">Vegetable Samosas</h2>
                      <p className="text-center">Crispy pastry with spiced veggies</p>
                    </div></div></div>
      <p>Preheat the oven to 400°F. Cut the puff pastry into 6-inch squares. In a bowl, mix together the mashed vegetables, spices, and salt. Place a spoonful of the mixture onto each square of pastry. Fold the pastry over to form a triangle and seal the edges. Bake in the preheated oven for 15-20 minutes or until golden brown. Alternatively, you can fry the samosas in hot oil until crispy.</p>
      <br /><br />
      <h2 className="fs-4 font-poppins">2. Tandoori Chicken Skewers</h2>
      <ul style={{ listStyleType: "disc" }} className="ms-5">
        <li>1 lb boneless, skinless chicken breast, cut into bite-sized pieces</li>
        <li>1/2 cup plain yogurt</li>
        <li>2 cloves garlic, minced</li>
        <li>1 tsp ginger, grated</li>
        <li>1 tsp cumin powder</li>
        <li>1 tsp coriander powder</li>
        <li>1 tsp garam masala</li>
        <li>1/2 tsp turmeric powder</li>
        <li>1/2 tsp red chili powder</li>
        <li>1 tbsp lemon juice</li>
        <li>Salt to taste</li>
        <li>Skewers</li>
      </ul>
                <div className="position-relative">
      
      <div className="d-flex justify-content-center">
      <img src="/images/blog1/blog2 (1).png" alt="Aloo Tikki Burgers" className="h-50 w-50 img-fluid d-flex justify-content-center"/>
            <div  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                      <h2 className="text-center mb-0 fw-bolder">Tandoori Chicken Skewers</h2>
                      <p className="text-center">Grilled chicken with aromatic spices</p>
                    </div></div></div>
      <p>Soak the skewers in water for 30 minutes. In a bowl, mix together the yogurt, garlic, ginger, spices, lemon juice, and salt. Add the chicken pieces and coat well. Thread the chicken onto the skewers. Grill or broil the skewers for 10-12 minutes or until cooked through.</p>
        <br /><br />
        <h2 className="fs-4 font-poppins">3. Aloo Tikki Burgers</h2>
      <ul style={{ listStyleType: "disc" }} className="ms-5">
        <li>4 large potatoes, boiled and mashed</li>
        <li>1/2 cup peas</li>
        <li>1/2 cup bread crumbs</li>
        <li>1/2 tsp cumin seeds</li>
        <li>1/2 tsp coriander seeds</li>
        <li>1/2 tsp garam masala</li>
        <li>1/2 tsp red chili powder</li>
        <li>1/2 tsp turmeric powder
        </li>
      </ul>
      <p>Mix together mashed potatoes, peas, bread crumbs, cumin seeds, coriander seeds, garam masala, red chili powder, and turmeric powder. Form into patties and cook on a griddle until golden brown. Serve on buns with your favorite toppings like onions, tomatoes, and chutney.</p>
                <div className="position-relative">
      
      <div className="d-flex justify-content-center">
      <img src="/images/blog1/blog2 (3).png" alt="Aloo Tikki Burgers" className="h-50 w-50 img-fluid d-flex justify-content-center"/>
            <div  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                      <h2 className="text-center mb-0 fw-bolder">Aloo Tikki Burgers</h2>
                      <p className="text-center">Spiced potato patties in buns</p>
                    </div></div></div>
      <p>This fusion of Indian and American cuisine is sure to be a crowd-pleaser. Aloo tikki, a popular Indian street food, is given a new twist by being served on a burger bun. It's an easy and delicious way to impress your friends with your culinary skills.</p>
      <br /><br />
<h2 className="fs-4 font-poppins">4. Chicken Kebabs</h2>
      <ul style={{ listStyleType: "disc" }} className="ms-5">
        <li>1 lb boneless, skinless chicken breast, cut into 1-inch pieces</li>
        <li>1/2 cup plain yogurt</li>
        <li>1 tbsp lemon juice</li>
        <li>1 tbsp ginger-garlic paste</li>
        <li>1/2 tsp cumin powder</li>
        <li>1/2 tsp coriander powder</li>
        <li>1/2 tsp garam masala</li>
        <li>1/2 tsp red chili powder</li>
      </ul>
      <p>Mix together yogurt, lemon juice, ginger-garlic paste, cumin powder, coriander powder, garam masala, and red chili powder to make a marinade. Add chicken pieces and marinate for at least 1 hour. Thread chicken onto skewers and grill until cooked through. Serve with mint chutney.</p>
                <div className="position-relative">
      
      <div className="d-flex justify-content-center">
      <img src="/images/blog1/blog2 (5).png" alt="Aloo Tikki Burgers" className="h-50 w-50 img-fluid d-flex justify-content-center"/>
            <div  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                      <h2 className="text-center mb-0 fw-bolder">Chicken Kebabs</h2>
                      <p className="text-center">Skewered marinated chicken grilled golden</p>
                    </div></div></div>
      <p>Kebabs are a popular Indian dish and make a great addition to any sleepover party. These chicken kebabs are marinated in a flavorful blend of spices and yogurt, then grilled to perfection. Serve with mint chutney for a refreshing and zesty flavor.</p>
      <br /><br />
<h2 className="fs-4 font-poppins">5. Fruit Chaat</h2>
      <ul style={{ listStyleType: "disc" }} className="ms-5">
        <li>2 cups mixed fruit (such as apples, bananas, oranges, grapes, and pomegranate)</li>
        <li>1/2 cup plain yogurt</li>
        <li>1 tbsp honey</li>
        <li>1/2 tsp chaat masala</li>
        <li>1/2 tsp cumin powder</li>
        <li>1/2 tsp red chili powder</li>
      </ul>
      <p>Mix together yogurt, honey, chaat masala, cumin powder, and red chili powder. Add mixed fruit and toss to coat. Serve in bowls or cups.</p>
                <div className="position-relative">
      
      <div className="d-flex justify-content-center">
      <img src="/images/blog1/blog2 (4).png" alt="Aloo Tikki Burgers" className="h-50 w-50 img-fluid d-flex justify-content-center"/>
            <div  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="position-absolute bottom-0 w-50 py-1 d-flex flex-column justify-content-end text-white overlay">
                      <h2 className="text-center mb-0 fw-bolder">Fruit Chaat</h2>
                      <p className="text-center">Fresh fruit salad with spices</p>
                    </div></div></div>
      <p>End your sleepover party on a sweet note with a refreshing and healthy fruit chaat. This popular Indian snack is a mix of fresh fruits and a tangy yogurt dressing that's sure to satisfy your sweet tooth. Plus, it's a guilt-free dessert option that's easy to make.</p>
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
<Footer />
</>
  );
}

export default Blog2;