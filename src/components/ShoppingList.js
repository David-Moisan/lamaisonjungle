import React, { useState } from "react";
import { plantList } from "../data/plantList";
import "../styles/ShoppingList.css";
import Categories from "./Categories";
import PlantItem from "./PlantItem";

export default function ShoppingList({ cart, updateCart }) {
  const [activeCategroy, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  const addToCart = (name, price) => {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };

  return (
    <div className="shopping">
      <Categories 
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategroy}
      />
      <ul className="shopping__list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategroy || activeCategroy === category ? (
            <div key={id} className="shopping-card">
              <PlantItem
                id={id}
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)} className="btn-add">Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}
