import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
  width: 70vw;
  justify-content: center;
  display: flex;
  height: 10vh;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-bottom: 4px solid transparent;
  }
  a:hover {
    border-bottom: 4px solid rgb(200, 194, 194);
  }
  .active {
    border-bottom: 4px solid black;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;
