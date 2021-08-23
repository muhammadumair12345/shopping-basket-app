import React, { FC } from "react";
import ShoppingBasketFontIcons from "../ShoppingBasketFontIcons/ShoppingBasketFontIcons";
import { Link, Nav } from "./ShoppingBasketNav.style";

const ShoppingBasketNav: FC = () => {
  return (
    <Nav>
      {["/", "Shoes", "Clothes", "Bags"].map(
        (navLink: string, index: number) => (
          <Link
            to={navLink.toLocaleLowerCase()}
            key={index}
            activeClassName="active"
            end
          >
            <ShoppingBasketFontIcons fontIconId={index} />
            {navLink !== "/" ? navLink : "Home"}
          </Link>
        )
      )}
    </Nav>
  );
};

export default ShoppingBasketNav;
