import React from "react";
import '../styles/Categories.css'

export default function Categories({
  setActiveCategory,
  categories,
  activeCategory,
}) {
  return (
    <div className="categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="categories__select"
      >
        <option value="">---</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </div>
  );
}
