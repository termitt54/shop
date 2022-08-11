import React, { useState } from "react";
import "./index.scss";
import noImage from "../../../../assets/img/no-image.webp";
import { Memory } from "./components/Memory";
import { Color } from "./components/Color";
import { Guarantee } from "./components/Guarantee";

export const Card = ({
  card,
  cardIndex,
  addItem,
  itemToCart,
  setItemToCart,
}) => {
  const addNewItemToCart = (e) => {
    const newItem = e;
    addItem(newItem);
  };

  const [changeMemoryPrice, setChangeMemoryPrice] = useState(0);
  const [changeColorPrice, setChangeColorPrice] = useState(0);
  const [changeGuarenteePrice, setChangeGuarenteePrice] = useState(0);

  const calculateOne = (e) => {
    if (e === "64Gb") {
      setChangeMemoryPrice(0);
    }

    if (e === "128Gb") {
      setChangeMemoryPrice(1000);
    }

    if (e === "256Gb") {
      setChangeMemoryPrice(2000);
    }

    if (e === "512Gb") {
      setChangeMemoryPrice(5000);
    }
  };

  const calculateTwo = (e) => {
    if (e === "green") {
      setChangeColorPrice(1000);
    }

    if (e === "red") {
      setChangeColorPrice(2000);
    }

    if (e === "black") {
      setChangeColorPrice(0);
    }

    if (e === "white") {
      setChangeColorPrice(0);
    }

    if (e === "blue") {
      setChangeColorPrice(1000);
    }
  };

  const calculateThree = (e) => {
    if (e === "6 месяцев") {
      setChangeGuarenteePrice(0);
    }

    if (e === "1 год") {
      setChangeGuarenteePrice(500);
    }

    if (e === "1.5 года") {
      setChangeGuarenteePrice(1000);
    }

    if (e === "2 года") {
      setChangeGuarenteePrice(1490);
    }

    if (e === "3 года") {
      setChangeGuarenteePrice(2490);
    }

    if (e === "5 лет") {
      setChangeGuarenteePrice(5000);
    }
  };

    const [showMemory, setShowMemory] = useState("")
    const qwer = (e) => {
        setShowMemory(e)
    }
    const [showColor, setShowColor] = useState("")
    const qwer1 = (e) => {
        setShowColor(e)
    }
    const [showGuarantee, setShowGuarantee] = useState("")
    const qwer2 = (e) => {
        setShowGuarantee(e)
    }

  let price =
    card.price + changeMemoryPrice + changeColorPrice + changeGuarenteePrice;
  let name = card.name;
  let id = Date.now();
  let count = card.count;
  let memory = showMemory;
  let color = showColor;
  let guarantee = showGuarantee;
  let totalPrice = price * card.count
  

  return (
    <div className="card">
      <div className="card__picture">
        <img className="card__img" src={noImage} alt="" />
      </div>
      <div className="card__info">
        <div className="card__id">№{1000 + cardIndex}</div>
        <div className="card__name">Название: {card.name}</div>
        <div className="card__country">Производитель : {card.country}</div>
        <div className="card__guarantee">
          Гарантия :{" "}
          <Guarantee
            guaranteePrice={changeGuarenteePrice}
            setGuarenteePrice={calculateThree}
            setGuarantee={qwer2}
          />
        </div>
        <div className="card__color">
          Цвет :{" "}
          <Color
            cardIndex={cardIndex}
            colorPrice={changeColorPrice}
            setColorPrice={calculateTwo}
            setColor={qwer1}
          />
        </div>
        <div className="card__memory">
          Память :{" "}
          <Memory
            cardIndex={cardIndex}
            memoryPrice={changeMemoryPrice}
            setMemoryPrice={calculateOne}
            setMemory={qwer}
          />
        </div>
      </div>
      <div className="card__price">{price} Руб.</div>
      <div className="card__buttons">
        <button
          onClick={(e) => addNewItemToCart({ price, name, memory, color, guarantee, id, count, totalPrice })}
          className="btn"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};
