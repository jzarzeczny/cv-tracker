import {
  CardButton,
  CardButtons,
  CardContaiainer,
  CardDescription,
  CardHeader,
  CardInfo,
  CardInfoContainer,
  CardStatus,
  CardTitle,
} from "./components/SingleCard.styled";

function SingleCard({ data }) {
  return (
    <CardContaiainer>
      <CardTitle>{data.companyName}</CardTitle>
      <CardStatus status={data.status} />
      <CardInfoContainer left>
        <CardHeader>Aplication date</CardHeader>
        <CardInfo>{data.aplicationDate}</CardInfo>
      </CardInfoContainer>
      <CardInfoContainer>
        <CardHeader>Salary</CardHeader>
        <CardInfo>{data.salary}</CardInfo>
      </CardInfoContainer>
      <CardDescription>{data.description}</CardDescription>
      <CardButtons>
        <CardButton>Details</CardButton>
        <CardButton>Change status</CardButton>
      </CardButtons>
    </CardContaiainer>
  );
}

export default SingleCard;
