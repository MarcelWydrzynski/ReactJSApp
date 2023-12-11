import React from "react";
import "./CartItem.scss";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const totalPrice = item.mealPrice * item.quantity;

  return (
    <li className="cart-item">
      <div className="cart-item__quantity">
        <button onClick={() => onDecrease(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)}>+</button>
      </div>
      <img
        className="cart-item__img"
        src={item.imageUrl}
        alt={`A picture of ${item.mealTitle}`}
      />
      <p className="cart-item__title">{item.mealTitle}</p>
      <p className="cart-item__price">${totalPrice.toFixed(2)}</p>
      <button className="cart-item__btn" onClick={() => onRemove(item.id)}>
        X
      </button>
    </li>
  );
};

export default CartItem;