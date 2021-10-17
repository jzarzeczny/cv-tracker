import styled from "styled-components";

const StyledHamburger = styled.button`
  border: none;
  width: 28px;
  height: 28px;
  position: relative;
  justify-self: end;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;
const Line = styled.div`
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: #000;
  transition: all 0.5s ease;

  &:first-of-type {
    top: ${({ open }) => (open ? "13px" : "3px")};
    transform: ${({ open }) => open && "rotate(-45deg)"};
  }
  &:nth-of-type(2) {
    transform: ${({ open }) => open && "translate(120%)"};
  }
  &:last-of-type {
    bottom: ${({ open }) => (open ? "12px" : "3px")};
    transform: ${({ open }) => open && "rotate(45deg)"};
  }
`;
function Hamburger({ open, toggleNav }) {
  return (
    <StyledHamburger open={open} onClick={toggleNav}>
      <Line open={open} />
      <Line open={open} />
      <Line open={open} />
    </StyledHamburger>
  );
}

export default Hamburger;
