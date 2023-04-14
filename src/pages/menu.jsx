import React from "react";
import "../index.css";
import data from "../components/menu.json";
import Footer from "../components/footer";
import MenuCard from "../components/MenuCard";

function Menu() {
  return (
    // <h1>this is the Menupage</h1>
    <div className="div-body">
      <div className="row container">
        <div class="row p-1 Recommended">
          {data.items.map((item) => {
            if (item.cat === "Recommended") {
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
        <div class="row p-1 Indian-Combo">
          {data.items.map((item) => {
            if (item.cat === "Indian-Combo") {
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
        <div class="row p-1 Meals">
          {data.items.map((item) => {
            if (item.cat === "Meals") {
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
        <div class="row p-1 Snacks-Starter">
          {data.items.map((item) => {
            if (item.cat === "Snacks-Starter") {
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
        <div class="row p-1 Soya-Chap-Tandoori">
          {data.items.map((item) => {
            if (item.cat === "Soya-Chap-Tandoori") {
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
        <div class="row p-1 Food-Point-Special">
          {data.items.map((item) => {
            if (item.cat === "Food-Point-Special") {
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
        <div class="row p-1 Paneer">
          {data.items.map((item) => {
            if (item.cat === "Paneer") {
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
        <div class="row p-1 Dal">
          {data.items.map((item) => {
            if (item.cat === "Dal") {
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
        <div class="row p-1 Chinese">
          {data.items.map((item) => {
            if (item.cat === "Chinese") {
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
        <div class="row p-1 Maggi">
          {data.items.map((item) => {
            if (item.cat === "Maggi") {
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
        <div class="row p-1 Main-Course">
          {data.items.map((item) => {
            if (item.cat === "Main-Course") {
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
        <div class="row p-1 Momos">
          {data.items.map((item) => {
            if (item.cat === "Momos") {
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
        <div class="row p-1 Pasta">
          {data.items.map((item) => {
            if (item.cat === "Pasta") {
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
        <div class="row p-1 Rice">
          {data.items.map((item) => {
            if (item.cat === "Rice") {
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
        <div class="row p-1 Roll">
          {data.items.map((item) => {
            if (item.cat === "Roll") {
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
        <div class="row p-1 Salad">
          {data.items.map((item) => {
            if (item.cat === "Salad") {
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
        <div class="row p-1 Sandwich">
          {data.items.map((item) => {
            if (item.cat === "Sandwich") {
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
        <div class="row p-1 Soup">
          {data.items.map((item) => {
            if (item.cat === "Soup") {
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
      {/* <img src='/images/body.png' className='newsize'/> */}
    </div>
  );
}

export default Menu;
