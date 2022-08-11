import React from "react";
import "./index.scss";

export const Header = ({active, setActive, remove, setRemove, cartActive, setCartActive, cartCount, setCartCount}) => {

    return (
        <section className="header">
            <button onClick={e => setActive(true)} className="btn btn_add-card">Добавить карточку</button>
            <button onClick={e => setRemove(true)} className="btn btn_delete-card">Удалить карточку</button>
            <button onClick={e => setCartActive(true)} className="btn btn_cart">Корзина <span className={cartCount.length === 0 ? "btn__count btn__count_close" : "btn__count"}>{cartCount.length}</span></button>
        </section>
    )
}