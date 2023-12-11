import React from "react";
import "./Cart.scss";
import CartItem from "./CartItem";
import { motion } from "framer-motion";

const Cart = ({
  walletList,
  setWalletList,
  orderTotal,
  walletFunds,
  setWalletFunds,
  closeModal,
}) => {
  const increaseQuantity = (itemId) => {
    const updatedList = walletList.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setWalletList(updatedList);
  };

  const decreaseQuantity = (itemId) => {
    const updatedList = walletList.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setWalletList(updatedList);
  };

  const removeItem = (itemId) => {
    const updatedList = walletList.filter((item) => item.id !== itemId);
    setWalletList(updatedList);
  };

  const orderValidator = () => {
    if (orderTotal > walletFunds) {
      alert(
        "Your wallet balance is too low to finalize the order. Please add more funds and try again"
      );
      closeModal();
    } else if (walletList.length === 0) {
      alert("Add some meals to your order");
      closeModal();
    } else {
      alert("Your order has been placed!");
      setWalletFunds(walletFunds - orderTotal);
      setWalletList([]);
      closeModal();
    }
  };

  return (
    <>
      <motion.div
        className="cart"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ul className="cart-order-box">
          {walletList.length > 0 ? (
            walletList.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />
            ))
          ) : (
            <p className="cart-order__error">Add an item to start your order</p>
          )}
        </ul>
        <div className="cart-order-summary">
          <p className="cart-order-summary__total">
            Order Total: ${Math.round(orderTotal * 100) / 100}
          </p>
          <button className="cart-order-summary__btn" onClick={orderValidator}>
            Finalize Order!
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Cart;