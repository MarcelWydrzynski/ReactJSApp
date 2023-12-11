import React, { useState } from "react";
import Cart from "./Cart/Cart";
import Wallet from "./Wallet";

import "./Header.scss";

const Header = ({ walletList, setWalletList, orderTotal }) => {
  const [modal, setModal] = useState("");
  const [walletFunds, setWalletFunds] = useState(0);
  let popUp;

  const closeModal = () => {
    setModal("");
  };

  if (modal === "Cart") {
    popUp = (
      <div className="modal-backdrop" onClick={closeModal}>
        <Cart
          walletList={walletList}
          setWalletList={setWalletList}
          orderTotal={orderTotal}
          walletFunds={walletFunds}
          setWalletFunds={setWalletFunds}
          closeModal={closeModal}
        />
      </div>
    );
  } else if (modal === "Wallet") {
    popUp = (
      <div className="modal-backdrop" onClick={closeModal}>
        <Wallet
          orderTotal={orderTotal}
          walletFunds={walletFunds}
          setWalletFunds={setWalletFunds}
          closeModal={closeModal}
        />
      </div>
    );
  } else {
    popUp = "";
  }

  walletFunds.toFixed(2)
  return (
    <header className="header">
      {popUp}

      <h1 className="header__title"> Let's Eat! </h1>
      <nav className="header__nav">
        <button className="nav-button" onClick={(e) => setModal("Cart")}>
          Cart
          <span className="nav-button__balance">${orderTotal.toFixed(2)}</span>
        </button>
        <button className="nav-button " onClick={(e) => setModal("Wallet")}>
          Wallet
          <span className="nav-button__balance">${walletFunds.toFixed(2)}</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
