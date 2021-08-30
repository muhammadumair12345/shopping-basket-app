import styled from "styled-components";
import { Card } from "@material-ui/core";
import { Link } from "../ShoppingBasketNav/ShoppingBasketNav.style";

export const ShoppingCard = styled(Card)`
  margin: 1rem;
  width: 22rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled(Link)`
  flex: 1;
  background-image: url(${({ img_url }: any) => img_url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fafafa;
`;

export const CardBody = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  .name {
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
