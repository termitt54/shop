import React from "react";
import "./index.scss";

export const CartCard = ({ card, itemToCart, setItemToCart, addItem }) => {
  const addNewItemToCart = (e) => {
    const newItem = e;
    addItem(newItem);
  };

  let name = card.name;
  let price = card.price;
  let id = card.id;
  let count = card.count;
  let totalPrice = price * count;

  return (
    <div className="cart-card">
      <div className="cart-card__picture">{card.picture}</div>
      <div className="cart-card__name">{card.name}</div>
      <button
        onClick={(e) => addNewItemToCart({ name, price, id, count, totalPrice })}
        className="btn btn_cart-card"
      >
        Добавить {card.price} руб.
      </button>
    </div>
  );
};
