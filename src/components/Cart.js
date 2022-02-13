import React, { useState } from "react";
import "../styles/Card.css";

export default function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
    );
    
  const totalQuantity = cart.reduce((acc, plantType) => acc + plantType.amount, 0);
  console.log(totalQuantity)

  return isOpen ? (
    <div className="cart">
      <button onClick={() => setIsOpen(false)} className="btn-close">
        <i className="fa fa-times"></i>
      </button>
      {cart.length > 0 ? (
        <div className="cart__details">
          <h2>Panier</h2>
          <ul className="cart__list">
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])} className="btn-remove">
            <i className="fa fa-trash"></i><p>Vider le panier</p> 
          </button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="cart__closed">
      <button onClick={() => setIsOpen(true)} className="btn-open">
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart__amount">{totalQuantity}</span>
    </div>
  );
}
