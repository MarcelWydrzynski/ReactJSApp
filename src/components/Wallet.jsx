import { useEffect, useState } from "react";
import "./Wallet.scss";
import { motion } from "framer-motion";

const Wallet = ({ walletFunds, setWalletFunds, closeModal }) => {
  const [userInput, setUserInput] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const onAdd = () => {
    const amountToAdd = parseFloat(userInput);
    if (amountToAdd > 0 && paymentMethod !== "") {
      setWalletFunds((prevWalletBalance) => prevWalletBalance + amountToAdd);
      setUserInput("");
      closeModal();
    } else if (amountToAdd <= 0 || paymentMethod === "") {
      alert(
        "Please enter a valid amount greater than 0 and select a payment method"
      );
    }
  };

  const paymentMethodHandler = (e) => {
    const currentMethod = e.target.closest("button");

    if (paymentMethod === currentMethod) {
      currentMethod.style.border = "3px solid white";
      setPaymentMethod("");
    } else {
      if (paymentMethod) {
        paymentMethod.style.border = "3px solid white";
      }
      currentMethod.style.border = "3px solid orange";
      setPaymentMethod(currentMethod);
    }
  };

  return (
    <>
      <motion.div
        className="wallet"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="wallet-box-balance">
          <h4 className="wallet-box-balance__title">Balance: </h4>
          <span className="wallet-box-balance__price">
            ${walletFunds.toFixed(2)}
          </span>
        </div>

        <div className="wallet-box-fundsAddition">
          <h4>Add Funds To your Wallet</h4>
          <div className="wallet-box-input">
            <label>Amount:</label>
            <input
              type="number"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
            ></input>
          </div>
          <h4>Choose payment method</h4>
          <div className="wallet-payment-method">
            <button
              className="wallet-payment-method__btn"
              onClick={paymentMethodHandler}
            >
              <img
                className="wallet-payment-btn-img"
                src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                alt="paypal logo"
              />
            </button>
            <button
              className="wallet-payment-method__btn"
              onClick={paymentMethodHandler}
            >
              <img
                className="wallet-payment-btn-img"
                src="https://www.bsnowytarg.pl/_galeria/news/usluga-blik-dla-aplikacji-mobilnej-mobilenet-bsnowytarg-516-f9d.jpg"
                alt="blik logo"
              />
            </button>
            <button
              className="wallet-payment-method__btn"
              onClick={paymentMethodHandler}
            >
              <img
                className="wallet-payment-btn-img"
                src="https://alfred.dailyweb.pl/wp-content/uploads/2019/01/mastercard-nowe-logo.jpg"
                alt="mastercard logo"
              />
            </button>
          </div>
          <button className="wallet-funds-btn" onClick={onAdd}>
            Add funds
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Wallet;
