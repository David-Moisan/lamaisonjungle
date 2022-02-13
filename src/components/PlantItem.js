import React from "react";
import CareScale from "./CareScale";
import "../styles/PlantItem.css";

export default function PlantItem({
  id,
  name,
  cover,
  light,
  water,
  price
}) {
  const handleClick = (plantName) => {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱`)
  }

  return (
    <li key={id} className="plant__item" onClick={() => handleClick}>
      <span className="item__price">{price}€</span>
      <img className="item__cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}
