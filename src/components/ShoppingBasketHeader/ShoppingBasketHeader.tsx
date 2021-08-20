import React, { FC } from "react";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import ShoppingBasketNav from "../ShoppingBasketNav/ShoppingBasketNav";
import { Header, Logo } from "./ShoppingBasketHeader.style";
import { Link } from "../ShoppingBasketNav/ShoppingBasketNav.style";

const ShoppingBasketHeader: FC = () => {
  return (
    <Header>
      <Logo>Shopping Basket</Logo>
      <ShoppingBasketNav />
      <Link to="/cart">
        <IconButton color="inherit">
          <Badge badgeContent={1} color="secondary">
            <ShoppingCart fontSize="small" />
          </Badge>
        </IconButton>
      </Link>
    </Header>
  );
};

export default ShoppingBasketHeader;