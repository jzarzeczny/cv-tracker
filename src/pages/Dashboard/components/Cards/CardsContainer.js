import { chownSync } from "fs";
import { StyledCardContainer } from "./components/CardsContainer.styled";

function CardsContainer({ children }) {
  return <StyledCardContainer>{children}</StyledCardContainer>;
}

export default CardsContainer;
