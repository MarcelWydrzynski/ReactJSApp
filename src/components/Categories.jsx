import React, { useState } from "react";
import "./Categories.scss";
import Burger from "../assets/Categories-Icons/Burgers.png";
import Beverages from "../assets/Categories-Icons/Beverages.png";
import Chinese from "../assets/Categories-Icons/Chinese.png";
import Pizza from "../assets/Categories-Icons/Pizza.png";
import Sweet from "../assets/Categories-Icons/Sweet and savory.png";
import Vegan from "../assets/Categories-Icons/Vegan.png";

const Categories = ({ onChangeCategory }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const activeCategoryHandler = (e) => {
    const btnCategory = e.currentTarget;
    const categoryText =
      btnCategory.querySelector(".category__text").textContent;

    if (activeButton) {
      activeButton.style.border = "3px solid white";
    }

    if (activeCategory === categoryText) {
      setActiveCategory(""); // Reset the active category if clicked again
      onChangeCategory(""); // Show all meals
    } else {
      btnCategory.style.border = "3px solid orange";
      setActiveCategory(categoryText);
      setActiveButton(btnCategory);
      onChangeCategory(categoryText);
    }
  };

  return (
    <div className="categories">
      <h2 className="categories__title">Categories</h2>
      <div className="category-container">
        <button className="category" onClick={activeCategoryHandler}>
          <img
            src={Burger}
            className="category__icon"
            alt="A small icon of a burger"
          />
          <span className="category__text">Burger</span>
        </button>
        <button className="category" onClick={activeCategoryHandler}>
          <img
            src={Beverages}
            className="category__icon"
            alt="A small icon of a beverage"
          />
          <span className="category__text">Beverages</span>
        </button>
        <button className="category" onClick={activeCategoryHandler}>
          <img
            src={Chinese}
            className="category__icon"
            alt="A small icon of chinese food"
          />
          <span className="category__text">Chinese</span>
        </button>
        <button className="category" onClick={activeCategoryHandler}>
          <img
            src={Pizza}
            className="category__icon"
            alt="a small icon of pizza"
          />
          <span className="category__text">Pizza</span>
        </button>
        <button className="category" onClick={activeCategoryHandler}>
          <img
            src={Sweet}
            className="category__icon"
            alt="a small icon of a donut"
          />
          <span className="category__text">Sweet</span>
        </button>
        <button className="category" onClick={activeCategoryHandler}>
          <img
            src={Vegan}
            className="category__icon"
            alt="a small icon of vegtables"
          />
          <span className="category__text">Vegan</span>
        </button>
      </div>
    </div>
  );
};

export default Categories;
