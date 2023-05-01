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
      {/* <div className="row container text-black">
        <div className="col-md-4">

        </div>
        <div className="col-md-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias quam laboriosam eum fugiat soluta autem laborum dicta labore, et dolor consectetur perferendis alias cupiditate ad dolore, cum consequatur dignissimos obcaecati, suscipit iusto! Error incidunt, eum nulla ratione officiis minima deserunt id eius numquam ex soluta dolor modi, vero cupiditate vel esse atque obcaecati. Unde porro magnam obcaecati perferendis quas qui voluptatum autem laboriosam aliquam error blanditiis at asperiores consequatur, aspernatur commodi! Tempore optio, harum obcaecati vitae ratione soluta maiores unde est provident necessitatibus fugit? Magnam officia similique eum explicabo, mollitia cumque, molestias voluptatem consequatur sed, alias reprehenderit fugit sequi. Dolore minus architecto sapiente voluptas? Voluptatem inventore ipsam quod iure nam quasi impedit cumque asperiores adipisci laudantium modi officia quis in, commodi deleniti delectus tempore distinctio fuga eaque consequuntur odio non tempora. Ipsum tempora, laborum libero nostrum modi expedita quasi nam earum aperiam, sunt odit voluptatem cum, ad corrupti illum molestiae? Perferendis unde beatae libero incidunt deserunt, excepturi quas mollitia in optio repellat. Omnis eos, sint dolor id quia eum qui dolore consequuntur provident repudiandae aut numquam autem maxime voluptatum minus. Quod beatae odit facilis saepe deleniti ipsum impedit dignissimos tempora, eligendi a ratione iusto in tenetur exercitationem voluptatibus dolor?
        </div>
        {categories.map((category) => (
          <div className={`row p-1 ${category}`}>
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
        ))}
      </div> */}
      <div className="d-flex container-flex align-items-start">
        <div className="nav flex-column col-md-2 border-end me-1" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {categories.map((category) => (
          <button className={`nav-link ${category === "Recommended" ? 'active' : ''}`}  id={`v-pills-${category}-tab`} data-bs-toggle="pill" data-bs-target={`#v-pills-${category}`} type="button" role="tab" aria-controls={`v-pills-${category}`} aria-selected={`${category === category[0] ? 'true' : 'false'}`}>{`${category}`}</button>
          ))}
        </div>

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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Menu;
