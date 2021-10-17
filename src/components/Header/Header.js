import { useState } from "react";
import Hamburger from "./styled/Hamburger.styled";
import { Logo, StyledHeader } from "./styled/Header.styled";

function Header() {
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    console.log("hi");
    setOpen(!open);
  };
  console.log(open);
  return (
    <StyledHeader>
      <Logo>traCV</Logo>
      <Hamburger open={open} toggleNav={toggleNav} />
    </StyledHeader>
  );
}

export default Header;
