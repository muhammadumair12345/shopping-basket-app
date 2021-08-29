import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const Header = styled(Paper)`
  height: 10vh;
  padding: 1.2rem;
  display: flex;
  border-radius: 0rem !important;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
  }
  @media (max-width: 650px) {
    flex: 1;
  }
`;
