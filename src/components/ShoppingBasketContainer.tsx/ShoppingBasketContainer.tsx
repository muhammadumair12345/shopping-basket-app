import React, { FC } from "react";
import { Container } from "./ShoppingBasketContainer.style";
import { Routes, Route } from "react-router-dom";
import ShoppingBasketHome from "../../pages/ShoppingBasketHome/ShoppingBasketHome";
import { ShoppingBasketCart } from "../../pages/ShoppingBasketCart/ShoppingBasketCart";
import { ShoppingBasketProducts } from "../../pages/ShoppingBasketProducts/ShoppingBasketProducts";
import ShoppingBasketSelectedProduct from "../../pages/ShoppingBasketSelectedProduct/ShoppingBasketSelectedProduct";
import ShoppingBasketList from "../../json/ShoppingBasketList.json";

const ShoppingBasketContainer: FC = () => {
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={<ShoppingBasketHome all_products={ShoppingBasketList} />}
        />
        {Object.keys(ShoppingBasketList).map((path, index) => (
          <Route path={`/${path}`} key={index}>
            <Route
              path="/"
              element={
                <ShoppingBasketProducts
                  product_category={
                    ShoppingBasketList[path as keyof Categories]
                  }
                />
              }
            />
            <Route
              path=":id"
              element={
                <ShoppingBasketSelectedProduct
                  selected_product={
                    ShoppingBasketList[path as keyof Categories]
                  }
                />
              }
            />
          </Route>
        ))}
        <Route path="/cart" element={<ShoppingBasketCart />} />
        <Route path="*" element={<h2>Page Not Found!</h2>} />
      </Routes>
    </Container>
  );
};

export default ShoppingBasketContainer;
