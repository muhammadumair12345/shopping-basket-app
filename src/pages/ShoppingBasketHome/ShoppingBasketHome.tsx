import { Card } from "@material-ui/core";
import React, { FC } from "react";
import ShoppingBasketList from "../../json/ShoppingBasketList.json";
import { Home } from "./ShoppingBasketHome.style";

const ShoppingBasketHome: FC = () => {
  return (
    <Home>
      {Object.keys(ShoppingBasketList).map((category: string) =>
        ShoppingBasketList[category as keyof Categories].map(
          (
            { id, name, price, itemsLeft, img }: ShoppingBasketData,
            index: number
          ) => (
            <Card key={index}>
              <img src={img} alt="" height="70%" width="100%" />
              <p>{id}</p>
              <p>{name}</p>
              <p>{price}</p>
              <p>{itemsLeft}</p>
            </Card>
          )
        )
      )}
    </Home>
  );
};

export default ShoppingBasketHome;
