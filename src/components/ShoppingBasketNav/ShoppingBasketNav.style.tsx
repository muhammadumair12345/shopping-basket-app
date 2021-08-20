import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;
`;
