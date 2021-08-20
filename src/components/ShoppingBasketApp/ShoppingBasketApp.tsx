import React, { FC } from "react";
import ShoppingBasketContainer from "../ShoppingBasketContainer.tsx/ShoppingBasketContainer";
import ShoppingBasketHeader from "../ShoppingBasketHeader/ShoppingBasketHeader";
import { App, GlobalStyle } from "./ShoppingBasketApp.style";
import { BrowserRouter as Router } from "react-router-dom";

const ShoppingBasketApp: FC = () => {
  return (
    <App>
      <GlobalStyle />
      <Router>
        <ShoppingBasketHeader />
        <ShoppingBasketContainer />
      </Router>
    </App>
  );
};

export default ShoppingBasketApp;
