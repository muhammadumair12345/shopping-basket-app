import React, { FC } from "react";
import { Products } from "./ShoppingBasketProducts.style";
import ShoppingBasketCard from "../../components/ShoppingBasketCard/ShoppingBasketCard";

export const ShoppingBasketProducts: FC<ShoppingBasketProductsProp> = ({
  product_category,
}) => {
  return (
    <Products>
      {product_category.map((data: ShoppingBasketData, index: number) => (
        <ShoppingBasketCard data={data} key={index} />
      ))}
    </Products>
  );
};
