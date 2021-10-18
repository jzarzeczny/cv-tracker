import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary.normal};
  transform: ${({ open }) => (open ? "translate(0)" : "translate(100%)")};
  transition: transform 0.5s ease;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
  width: 200px;
`;

const StyledListElement = styled.li`
  list-style: none;
`;

const StyledLink = styled.a`
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  font-size: ${({ theme }) => theme.font.size.big};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const navbarElementsList = ["Home", "Add aplication", "Contact"];

function Navbar({ open }) {
  return (
    <StyledNavbar open={open}>
      <StyledList>
        {navbarElementsList &&
          navbarElementsList.map((navbarElement, id) => (
            <StyledListElement key={id}>
              <StyledLink>{navbarElement}</StyledLink>
            </StyledListElement>
          ))}
      </StyledList>
    </StyledNavbar>
  );
}

export default Navbar;
