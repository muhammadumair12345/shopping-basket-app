import React, { FC } from "react";
import ShoppingBasketCard from "../../components/ShoppingBasketCard/ShoppingBasketCard";
import { Home } from "./ShoppingBasketHome.style";

const ShoppingBasketHome: FC<ShoppingBasketHomeProp> = ({ all_products }) => {
  return (
    <Home>
      {Object.keys(all_products).map((category: string) =>
        all_products[category as keyof Categories].map(
          (data: ShoppingBasketData, index: number) => (
            <ShoppingBasketCard data={data} key={index} />
          )
        )
      )}
    </Home>
  );
};

export default ShoppingBasketHome;
