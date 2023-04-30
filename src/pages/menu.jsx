import React from "react";
import "../index.css";
import data from "../components/menu.json";
import Footer from "../components/footer";
import MenuCard from "../components/MenuCard";

function Menu() {
  const categories = ["Recommended", "Indian-Combo", "Meals", "Snacks-Starter", "Soya-Chap-Tandoori", "Food-Point-Special", "Paneer", "Dal", "Chinese", "Maggi", "Main-Course", "Momos", "Pasta", "Rice", "Roll", "Salad", "Sandwich", "Soup"];
  return (
    // <h1>this is the Menupage</h1>
    <div className="div-body">
      <div className="row container">

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
      </div>
    </div>
  );
}

export default Menu;
