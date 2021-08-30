import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React, { FC } from "react";
import { CardBody, CardImage, ShoppingCard } from "./ShoppingBasketCard.style";

const ShoppingBasketCard: FC<ShoppingBasketCardProp> = ({ data }) => {
  return (
    <ShoppingCard>
      <CardImage img_url={data.img} to="/" />
      <CardBody>
        <div className="name">{data.name}</div>
        <div>PRICE ${data.price}</div>
        <div>
          <div>ITEMS LEFT {data.itemsLeft}</div>
          <IconButton color="inherit">
            <AddShoppingCart fontSize="small" />
          </IconButton>
        </div>
      </CardBody>
    </ShoppingCard>
  );
};

export default ShoppingBasketCard;
