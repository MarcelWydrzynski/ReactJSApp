import { useState, useEffect } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Meal from "./components/Meal";
import Wallet from "./components/Wallet";
import Cart from "./components/Cart/Cart";
import Meals from "./Data/Data.js";
import "./App.scss";
import Logo from "./assets/Logo/Logo.png";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [meals, setMeals] = useState(Meals);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [walletList, setWalletList] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0); // Initialize orderTotal state

  useEffect(() => {
    setFilteredMeals(meals);
  }, [meals]);

  const dataFilterHandler = (activeCategory) => {
    if (activeCategory === "") {
      setFilteredMeals(meals);
    } else {
      const filteredMeals = meals.filter(
        (meal) => meal.category === activeCategory
      );
      setFilteredMeals(filteredMeals);
    }
  };

  const onAddItem = (meal, quantity) => {
    const existingItemIndex = walletList.findIndex(
      (item) => item.id === meal.id
    );

    if (existingItemIndex !== -1) {
      const updatedList = [...walletList];
      updatedList[existingItemIndex].quantity += quantity;

      setWalletList(updatedList);
    } else {
      setWalletList([
        ...walletList,
        {
          id: meal.id,
          mealTitle: meal.mealTitle,
          mealPrice: meal.mealPrice,
          imageUrl: meal.imageUrl,
          category: meal.category,
          quantity: quantity,
        },
      ]);
    }
  };

  useEffect(() => {
    const total = walletList.reduce(
      (acc, item) => acc + item.mealPrice * item.quantity,
      0
    );
    setOrderTotal(total);
  }, [walletList]);

  return (
    <div className="App">
      <Header
        walletList={walletList}
        setWalletList={setWalletList}
        orderTotal={orderTotal}
      />
      <Categories onChangeCategory={dataFilterHandler} />
      <main>
        <h2 className="main-title">Meals</h2>
        <motion.div layout className="meals-container">
          <AnimatePresence>
            {filteredMeals.map((meal) => (
              <Meal props={meal} key={meal.id} onClick={onAddItem} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
      <footer>
        <img
          src={Logo}
          alt="Logo of let's eat company"
          className="footer-logo"
        />
      </footer>
    </div>
  );
}

export default App;
