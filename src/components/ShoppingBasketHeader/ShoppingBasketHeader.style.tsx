import styled from "styled-components";

export const Header = styled.div`
  height: 10vh;
  padding: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
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
