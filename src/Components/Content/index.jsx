import React from "react";
import "./index.scss"
import { Card } from "./components/Card";

export const Content = ({cards, itemToCart, setItemToCart, addItem}) => {


  return (
    <section className="content">
      <div className="content__parameters">
        <input type="search" placeholder="Search"/>
      </div>

      <div className="content__cards">
        {cards.map(function (item, index) {
          return (
            <Card card={item} cardIndex={index} addItem={addItem} itemToCart={itemToCart} setItemToCart={setItemToCart}/>
          );
        })}
      </div>
    </section>
  );
};
