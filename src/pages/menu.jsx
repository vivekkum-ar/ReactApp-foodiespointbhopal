import React from "react";
import "../index.css";
import data from "../components/menu.json";
import Footer from "../components/footer";
import MenuCard from "../components/MenuCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Menu() {
  const categories = [
    "Recommended",
    "Indian-Combo",
    "Meals",
    "Snacks-Starter",
    "Soya-Chap-Tandoori",
    "Food-Point-Special",
    "Paneer",
    "Dal",
    "Chinese",
    "Maggi",
    "Main-Course",
    "Momos",
    "Pasta",
    "Rice",
    "Roll",
    "Salad",
    "Sandwich",
    "Soup",
  ];
  return (
    // <h1>this is the Menupage</h1>
    <div className="div-body">
      {/* Hero Section starts here */}
      <div style={{backgroundImage: `url("./images/hero2.png")`,backgroundRepeat: "no-repeat",backgroundSize:"cover"}} className="animate__animated animate__fadeInDown cover-container d-flex w-100 h-100 mx-auto flex-column">
        
        <main className="px-3 py-lg-2 pt-sm-2">
        <div className="d-flex ps-3 fw-bolder justify-content-start">
        <p className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap fw-bolder font-poppins py-1 py-lg-2">OUR MENU</p>
        </div>
          <p className="lead px-3 width-100-sm">Looking for a delicious dining experience? Look no further than FoodiesPoint Bhopal! Our diverse menu and cozy atmosphere make us the perfect destination for foodies. Come visit us today!</p>
          <div className="d-lg-inline-flex">
          <p className="lead px-3 pt-3">
          {/* <Link className="nav-link font-poppins text-prime" to="/about">
            <a className="btn btn-lg btn-light fw-bold border-white bg-white">About us</a>
            </Link> */}
          </p>
          <p className="lead px-3 pt-3">
          {/* <Link className="nav-link font-poppins text-prime" to="/menu"> 
            <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">go to MENU</a>
            </Link> */}
          </p>
          </div>
        </main>
<svg xmlns="http://www.w3.org/2000/svg" className='svg-wave p-0 m-0' viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L40,176C80,192,160,224,240,202.7C320,181,400,107,480,112C560,117,640,203,720,240C800,277,880,267,960,229.3C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
{/* Hero section ends here */}

{/* Menu categories start here */}
      <div className="d-flex container-flex align-items-start">
        <div className="nav flex-column col-md-2 border-end me-1" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {categories.map((category) => (
          <button className={`nav-link ${category === "Recommended" ? 'active' : ''}`}  id={`v-pills-${category}-tab`} data-bs-toggle="pill" data-bs-target={`#v-pills-${category}`} type="button" role="tab" aria-controls={`v-pills-${category}`} aria-selected={`${category === category[0] ? 'true' : 'false'}`}>{`${category}`}</button>
          ))}
        </div>
{/* Menu categories end here */}

{/* Menu item grids start here */}
            <div className="container-flex d-flex w-100 justify-content-center">
        <div className="tab-content col-md-11" id="v-pills-tabContent">
          {categories.map((category) => (
  <div className={`tab-pane fade ${category} ${category === "Recommended" ? 'active show' : ''}`} id={`v-pills-${category}`} role="tabpanel" aria-labelledby={`v-pills-${category}-tab`}>
            <h1 className="font-poppins text-prime-gradient fs-3 fw-bolder mt-2 pb-2 border-2 border-bottom">{`${category}`}</h1>
    <div className={`row d-flex justify-content-between p-1 ${category}`}>
      {data.items.map((item) => {
        if (item.cat === category) {
          return (
            <MenuCard
              name={item.name}
              category={item.cat}
              price={item.price}
              image={item["img-src"]}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  </div>
))}

        </div>
        </div>
{/* Menu item grids ends here */}


      </div>
      <Footer></Footer>
    </div>
  );
}

export default Menu;
