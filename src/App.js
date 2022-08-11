import React, { useState } from "react";
import "./styles/index.scss";
import { Content } from "./Components/Content";
import { Header } from "./Components/Header";
import { AddCard } from "./Components/AddCardModal";
import { DeleteCard } from "./Components/DeleteCardModal";
import { Cart } from "./Components/Cart";
import steklo from "./assets/img/steklo.webp";
import chehol from "./assets/img/chehol.webp";
import zy from "./assets/img/zy.webp";

function App() {
  const [cartActive, setCartActive] = useState(false)
  const [modals, setModals] = useState(false)
  const [removeCard, setRemoveCard] = useState(false)
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Apple IPhone 11",
      country: "Китай",
      price: 34000,
      count: 1
    },
    {
      id: 2,
      name: "Apple IPhone 12",
      country: "Китай",
      price: 43000,
      count: 1
    },
    {
      id: 3,
      name: "Apple IPhone 13",
      country: "Китай",
      price: 56000,
      count: 1
    },
  ]);

  const [cartCard, setCartCard] = useState([
    {
      id: 11,
      name: 'Чехол на телефон',
      price: 1290,
      picture: <img className="cart-card__icon" src={chehol} alt="" />,
      count: 1
    },
    {
      id: 12,
      name: 'Защитное стекло для телефона',
      price: 1990,
      picture: <img className="cart-card__icon" src={steklo} alt="" />,
      count: 1
    },
    {
      id: 13,
      name: 'Зарядное устройство',
      price: 2490,
      picture: <img className="cart-card__icon" src={zy} alt="" />,
      count: 1
    },

  ])

  const [items, setItems] = useState([]);
  const [itemsAdd, setItemsAdd] = useState();
  const addItemToCart = (newItem) => {
    if(items.find((item) => item.name === newItem.name && item.memory === newItem.memory && item.color === newItem.color && item.guarantee === newItem.guarantee)) {
      setItems((prev) => prev.filter((item) => item.name !== newItem.name && item.memory !== newItem.memory && item.color !== newItem.color && item.guarantee !== newItem.guarantee))
    } else {
      setItems([...items, newItem])
    }

  }
  console.log(items)

  const [removeCartItems, setRemoveCartItems] = useState(false)
  const removeItems = (item) => {
    setItems(items.filter(p => p.id !== item.id))
  }


  const [cardAdd, setCardAdd] = useState();
  const addNewCard = (newCard) => {
      setCards([...cards, newCard])
  }

  const delCard = (card) => {
      setCards(cards.filter(p => p.id !== card.id))
  }

  return (
    <div className="App">
      <Header active={modals} setActive={setModals} remove={removeCard} setRemove={setRemoveCard} cartActive={cartActive} setCartActive={setCartActive} cartCount={items} setCartCount={setItems}/>
      <Content itemToCart={itemsAdd} setItemToCart={setItemsAdd} addItem={addItemToCart} cards={cards} />
      <AddCard active={modals} setActive={setModals} card={cardAdd} setCard={setCardAdd} createCard={addNewCard}/>
      <DeleteCard cards={cards} deleteCard={delCard} remove={removeCard} setRemove={setRemoveCard}/>
      <Cart deleteItem={removeItems} removeItem={removeCartItems} setRemoveItem={setRemoveCartItems} itemIntoCart={itemsAdd} setItemIntoCart={setItemsAdd} addItem={addItemToCart} items={items} cartCard={cartCard} cartActive={cartActive} setCartActive={setCartActive}/>
    </div>
  );
}

export default App;
