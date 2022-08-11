import React from "react";
import { RemoveCard } from "../Content/components/RemoveCard";
import "./index.scss";

export const DeleteCard = ({remove, setRemove, cards, deleteCard}) => {
    return (
        <div className={remove ? "remove-card remove-card_active" : "remove-card"}>
            <div className="remove-card__content">
                {cards.map(function(item, index) {
                    return (
                            <RemoveCard qwer={item} cardIndex={index} deleteCard={deleteCard}/>
                    )
                })}
                <button onClick={() => setRemove(false)} className="btn">Закрыть</button>
            </div>
        </div>
    )
}