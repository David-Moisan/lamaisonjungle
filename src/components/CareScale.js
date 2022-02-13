import React from "react";
import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

export default function CareScale({ scaleValue, careType }) {
  const quantityLabel = {
    1: "peu",
    2: "modérément",
    3: "beaucoup",
  };

  const range = [1, 2, 3];

  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-svg" />
    ) : (
      <img src={Water} alt="water-svg" />
    );

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((element) =>
        scaleValue >= element ? (
          <span key={element.toString()} className="item__infos">{scaleType}</span>
        ) : null
      )}
    </div>
  );
}
