import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faShoePrints,
  faHome,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

type FontIconsProp = {
  fontIconId: number;
};

const ShoppingBasketFontIcons: FC<FontIconsProp> = ({ fontIconId }) => {
  const icons = [faHome, faShoePrints, faTshirt, faSuitcase];
  return <FontAwesomeIcon icon={icons[fontIconId]} pull="left" />;
};

export default ShoppingBasketFontIcons;
