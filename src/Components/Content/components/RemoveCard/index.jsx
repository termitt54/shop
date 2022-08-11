import React from "react";
import "./index.scss";

export const RemoveCard = ({ qwer, cardIndex, deleteCard }) => {
  return (
    <div className="delete-card">
      <div className="delete-card__number">{cardIndex + 1}.</div>
      <div>№{1000 + cardIndex}</div>
      <div className="delete-card__name">{qwer.name}</div>
      <div className="delete-card__price">{qwer.price}</div>
      <button onClick={() => deleteCard(qwer)} className="btn">Удалить</button>
    </div>
  );
};
