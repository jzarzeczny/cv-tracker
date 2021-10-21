import CardsContainer from "./CardsContainer";
import SingleCard from "./SingleCard";

function Cards({ data }) {
  return (
    <CardsContainer>
      <SingleCard data={data} />
    </CardsContainer>
  );
}

export default Cards;
