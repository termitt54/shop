import React, { useState } from "react";
import "./index.scss";

export const AddCard = ({ active, setActive, card, setCard, createCard }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);

  const addNewCard = () => {
    const newCard = {
      id: Date.now(),
      name,
      country,
      price,
      count: 1
    };

    createCard(newCard);
  };

  return (
    <div className={active ? "add-card add-card_active" : "add-card"}>
      <div className="add-card__content">
        <div className="add-card__content-inputs">
          Название:{" "}
          <input value={name} onChange={e => setName(e.target.value)} className="add-card__input" type="text" name="" id="" />
          Производитель:{" "}
          <input value={country} onChange={e => setCountry(e.target.value)} className="add-card__input" type="text" name="" id="" />
          Цена: <input value={price} onChange={e => setPrice(+e.target.value)} className="add-card__input" type="text" name="" id="" />
        </div>
        <div className="add-card__content-buttons">
          <button onClick={addNewCard} className="btn">
            Добавить
          </button>
          <button onClick={() => setActive(false)} className="btn">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
