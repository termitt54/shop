import React from "react";
import "./index.scss";
import { CartCard } from "./components/CartCard";
import { Count } from "./components/Count";

export const Cart = ({ cartActive, setCartActive, cartCard, items=[], itemIntoCart, setItemIntoCart, addItem, removeItem, setRemoveItem, deleteItem, itemCount}) => {
  let sum = items.reduce(function(item, obj) {
    return (
      item + obj.totalPrice
    )
  }, 0)

  return (
    <div className={cartActive ? "cart cart_active" : "cart"}>
      <div className="cart__content">
        <div className="cart__items">
          <div className={items.length === 0 ? "cart__empty" : "cart__full"}>Корзина пустая</div>

          {items.map(function (item, index) {
            itemCount = item.count
            return (
              <div className="item">
                <div className="item__info">
                  <div className="item__name">{item.name} {item.color} {item.memory} </div>
                  <div className="item__guarantee">Гарантия: {item.guarantee}</div>
                  <div className="item__price">Цена: {item.totalPrice} руб.</div>
                </div>
                
                <Count itemCount={itemCount}/>

                <button onClick={() => deleteItem(item)} className="btn btn_item">Удалить</button>
              </div>
            );
          })}

          <div className="cart__items-info">
            <div className="cart__items-info-price">Итого: {sum} Руб.</div>
          </div>
        </div>

        <div className="cart__add">
          {cartCard.map(function (item) {
            return (
              <CartCard card={item} itemToCart={itemIntoCart} setItemToCart={setItemIntoCart} addItem={addItem}/>
            );
          })}
        </div>

        <div className="cart__buttons">
          <button onClick={() => setCartActive(false)} className="btn">
            Закрыть
          </button>
          <button className="btn">Оформить</button>
        </div>
      </div>
    </div>
  );
};
