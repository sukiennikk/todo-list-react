import styled from "styled-components";
import { NavLink } from "react-router-dom";

  export const Nav = styled.nav`
  background-color: teal;
  padding: 16px;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 400;

  &.active {
    font-weight: 700;
    text-decoration: none; 
  }

  &:hover {
    text-decoration: none;
    font-weight: 600;
  }
`;
