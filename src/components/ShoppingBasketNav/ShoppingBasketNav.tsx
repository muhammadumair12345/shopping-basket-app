import React, { FC } from "react";
import { Link, Nav } from "./ShoppingBasketNav.style";

const ShoppingBasketNav: FC = () => {
  return (
    <Nav>
      {["/", "Shoes", "Clothes", "Bags"].map((navLink, index) => (
        <Link
          to={navLink.toLocaleLowerCase()}
          key={index}
          activeClassName="active"
          end
        >
          {navLink !== "/" ? navLink : "Home"}
        </Link>
      ))}
    </Nav>
  );
};

export default ShoppingBasketNav;
