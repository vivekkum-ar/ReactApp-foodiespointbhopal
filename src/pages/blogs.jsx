import React from "react";
import "./basicCss.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Outlet } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogTop from "../components/BlogTop";
import Footer from "../components/footer";
import BlogRBar from "../components/BlogRBar";

function Blogs() {
  return (
    <>
      <main className="container text-dark mt-3">
        <BlogTop />

        <div className="row">
          {/* Blog begins here */}
          <div className="col-md-8 ">
            <div>
              <h2
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
                className="font-poppins fs-4 d-flex justify-content-center mb-0 pb-0 text-uppercase"
              >
                "You are what you eat"
              </h2>{" "}
              <span className="d-flex justify-content-center pt-0 mt-0 text-capitalize fst-italic mb-3">
                - Ludwig Feuerbach
              </span>
              <p>
                At our restaurant, we believe that what you put into your body
                is just as important as how it tastes. That's why we're
                committed to using fresh, high-quality ingredients in all of our
                dishes. But did you know that many of these ingredients also
                have incredible health benefits? In this blog post, we'll take a
                closer look at some of the ingredients we use and how they can
                support your overall health and well-being.
              </p>
              <br />
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  <span className="fw-bold">Turmeric:</span> This vibrant yellow
                  spice is a staple in many Indian and Southeast Asian dishes.
                  It contains a compound called curcumin, which has been shown
                  to have anti-inflammatory and antioxidant properties. Some
                  studies suggest that turmeric may help to reduce the risk of
                  heart disease, cancer, and Alzheimer's disease. We use
                  turmeric in our curries and rice dishes for both its flavor
                  and its health benefits.
                </li>
                <div className="d-flex justify-content-center">
                  <img
                    className="img-fluid h-50 w-50 mt-2"
                    src="/images/gal (1).avif"
                    title="A salad bowl filled with quinoa, kale, carrots, beets, tomatoes, and grilled chicken."
                  />
                </div>
                <br />

                <li>
                  <span className="fw-bold">Quinoa:</span> This ancient grain
                  has gained popularity in recent years for its high protein and
                  fiber content. Quinoa is also a good source of minerals like
                  iron, magnesium, and phosphorus. Its complex carbohydrates
                  provide sustained energy without spiking blood sugar levels.
                  We use quinoa in our salads and bowls for a nutritious and
                  filling meal.
                </li>
                <div className="d-flex justify-content-center">
                  <img
                    className="img-fluid h-50 w-50 mt-2"
                    src="/images/gal (2).avif"
                    title="A plate of grilled salmon with lemon slices and a side of steamed broccoli, carrots, and zucchini."
                  />
                </div>
                <br />

                <li>
                  <span className="fw-bold">Salmon:</span> This fatty fish is
                  rich in omega-3 fatty acids, which are essential for brain and
                  heart health. Omega-3s can also help to reduce inflammation in
                  the body and may lower the risk of chronic diseases like
                  arthritis and depression. We source our salmon from
                  sustainable fisheries and serve it grilled, baked, or smoked.
                </li>
                <div className="d-flex justify-content-center">
                  <img
                    className="img-fluid h-50 w-50 mt-2"
                    src="/images/gal (3).avif"
                    alt="A bowl of creamy yellow curry with chunks of chicken and vegetables, served with a mound of steamed rice and pieces of naan bread."
                  />
                </div>

                <br />

                <li>
                  <span className="fw-bold">Kale:</span> This leafy green has
                  been hailed as a superfood for its high nutrient density. Kale
                  is rich in vitamins A, C, and K, as well as calcium and iron.
                  It also contains antioxidants and anti-inflammatory compounds.
                  We use kale in our salads and smoothies for a boost of
                  nutrition and flavor.
                </li>
                <div className="d-flex justify-content-center">
                  <img
                    className="img-fluid h-50 w-50 mt-2"
                    src="/images/gal (4).avif"
                    alt="title close-up of a pile of fresh turmeric roots, with their distinctive yellow-orange color and knobby shape."
                  />
                </div>

                <br />

                <li>
                  <span className="fw-bold">Ginger:</span> This spicy root is a
                  popular ingredient in Asian cuisine and has been used for
                  medicinal purposes for centuries. Ginger has anti-inflammatory
                  and antioxidant properties and may help to reduce nausea and
                  alleviate pain. We use ginger in our stir-fries and teas for
                  its warming and soothing effects.
                </li>
                <div className="d-flex justify-content-center">
                  <img
                    className="img-fluid h-50 w-50 mt-2"
                    src="/images/gal (5).avif"
                    title="A white mug filled with a creamy ginger tea latte, topped with frothy milk and a sprinkle of cinnamon."
                  />
                </div>
                <br />
                <li>
                  <span className="fw-bold">Garlic:</span> It is an essential
                  ingredient in many dishes at our restaurant, is not only
                  flavorful but also has a host of health benefits. It has been
                  shown to have anti-inflammatory and immune-boosting
                  properties, and can even help lower blood pressure and
                  cholesterol levels. In addition, garlic has been used for
                  centuries as a natural remedy for fighting off colds and other
                  illnesses. So next time you enjoy our garlic naan or
                  garlic-infused dal, you can feel good about not only the taste
                  but also the potential health benefits.
                </li>
                <div className="d-flex justify-content-center">
                  <img
                    className="img-fluid h-50 w-50 mt-2"
                    src="/images/gal (5).avif"
                    title="A white mug filled with a creamy ginger tea latte, topped with frothy milk and a sprinkle of cinnamon."
                  />
                </div>
                <br />
              </ul>
              By incorporating these and other nutrient-dense ingredients into
              our menu, we aim to provide our customers with not only delicious
              but also healthful meals. So next time you dine with us, know that
              you're not only satisfying your taste buds but also nourishing
              your body.
              <br />
              <br />
              Incorporating healthy ingredients into your meals doesn't have to
              mean sacrificing flavor or enjoyment. At our restaurant, we
              believe that food should be both delicious and nourishing. By
              using high-quality ingredients like turmeric, quinoa, salmon,
              kale, and ginger, we're able to create dishes that not only taste
              great but also support your overall health and well-being. We hope
              this blog post has inspired you to think more about the foods you
              eat and how they can benefit your body. So next time you're dining
              with us, know that you're not only treating your taste buds but
              also giving your body a boost of essential nutrients.
              <br />
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

export default Blogs;
