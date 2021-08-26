import React, { FC } from "react";
import { Products } from "./ShoppingBasketProducts.style";

export const ShoppingBasketProducts: FC<any> = ({ products }) => {
  return (
    <Products>
      <h3>{products}</h3>
    </Products>
  );
};
