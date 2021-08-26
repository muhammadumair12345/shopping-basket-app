import React, { FC } from "react";
import { SelectedProduct } from "./ShoppingBasketSelectedProduct.style";

const ShoppingBasketSelectedProduct: FC<any> = ({ selected_product }) => {
  return (
    <SelectedProduct>
      <h3>{selected_product}</h3>
    </SelectedProduct>
  );
};

export default ShoppingBasketSelectedProduct;
