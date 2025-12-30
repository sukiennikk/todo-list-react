import { Nav, StyledLink } from "./styled";

const Navigation = () => (
  <Nav>
    <StyledLink exact to="/">
      Zadania
    </StyledLink>
    <StyledLink to="/autor">
      O autorze
    </StyledLink>
  </Nav>
);

export default Navigation;
