/// <reference types="react-scripts" />
declare module "styled-components";
declare module "*.png";

interface ShoppingBasketData {
  id: string;
  name: string;
  price: number;
  itemsLeft: number;
  img: string;
}

interface Categories {
  shoes: ShoppingBasketData[];
  clothes: ShoppingBasketData[];
  bags: ShoppingBasketData[];
}

interface ShoppingBasketProductsProp {
  product_category: ShoppingBasketData[];
}

interface ShoppingBasketHomeProp {
  all_products: Categories;
}

interface ShoppingBasketCardProp {
  data: ShoppingBasketData;
  key: number;
}
