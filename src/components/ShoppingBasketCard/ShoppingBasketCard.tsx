import React, { FC } from "react";
import { ShoppingCard } from "./ShoppingBasketCard.style";

const ShoppingBasketCard: FC<ShoppingBasketCardProp> = ({ data, key }) => {
  return (
    <ShoppingCard key={key}>
      <img src={data.img} alt="" height="70%" width="100%" />
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.price}</p>
      <p>{data.itemsLeft}</p>
    </ShoppingCard>
  );
};

export default ShoppingBasketCard;
