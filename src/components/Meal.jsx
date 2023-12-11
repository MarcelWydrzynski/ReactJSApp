import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import "./meal.scss";

const Meal = ({ props, onClick }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.15 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.4 },
      }}
      tr
      layout
      className="meal"
    >
      <div className="meal__header">
        <h3 className="meal__title">{props.mealTitle} </h3>
        <img src={props.imageUrl} className="meal__img" alt="" />
      </div>

      <div className="meal__footer">
        <p className="meal__price">${props.mealPrice}</p>
        <button className="meal__btn" onClick={() => onClick(props, quantity)}>
          Add to cart
        </button>

        <div className="meal__quantity">
          <button className="meal__btn" onClick={increaseQuantity}>
            +
          </button>
          <span>{quantity}</span>
          <button className="meal__btn" onClick={decreaseQuantity}>
            -
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Meal;