import React, { FC } from "react";
import { Container } from "./ShoppingBasketContainer.style";
import { Routes, Route } from "react-router-dom";
import ShoppingBasketHome from "../../pages/ShoppingBasketHome/ShoppingBasketHome";
import { ShoppingBasketCart } from "../../pages/ShoppingBasketCart/ShoppingBasketCart";
import { ShoppingBasketProducts } from "../../pages/ShoppingBasketProducts/ShoppingBasketProducts";
import ShoppingBasketSelectedProduct from "../../pages/ShoppingBasketSelectedProduct/ShoppingBasketSelectedProduct";

const ShoppingBasketContainer: FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<ShoppingBasketHome />} />
        <Route path="/shoes">
          <Route
            path="/"
            element={<ShoppingBasketProducts products={"shoes"} />}
          />
          <Route
            path=":id"
            element={
              <ShoppingBasketSelectedProduct
                selected_product={"selected-shoe"}
              />
            }
          />
        </Route>
        <Route path="/clothes">
          <Route
            path="/"
            element={<ShoppingBasketProducts products={"clothes"} />}
          />
          <Route
            path=":id"
            element={
              <ShoppingBasketSelectedProduct
                selected_product={"selected-clothe"}
              />
            }
          />
        </Route>
        <Route path="/bags">
          <Route
            path="/"
            element={<ShoppingBasketProducts products={"bags"} />}
          />
          <Route
            path=":id"
            element={
              <ShoppingBasketSelectedProduct
                selected_product={"selected-bag"}
              />
            }
          />
        </Route>
        <Route path="/cart" element={<ShoppingBasketCart />} />
        <Route path="*" element={<h2>Page Not Found!</h2>} />
      </Routes>
    </Container>
  );
};

export default ShoppingBasketContainer;
