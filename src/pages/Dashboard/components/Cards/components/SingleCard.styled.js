import styled from "styled-components";

export const CardContaiainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-top: none;
  & > * {
    place-self: center;
  }
`;
export const CardTitle = styled.h2`
  grid-column: 1/2;
  grid-row: 1/2;

  margin: 0;

  text-align: center;
`;

export const CardStatus = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  margin-right: -1rem;
  align-self: center;
  justify-self: end;
  width: 6rem;
  height: 3rem;
  background-color: green;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: -1rem;
    top: 0;
    width: 3rem;
    height: 3rem;
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const CardInfoContainer = styled.div`
  grid-column: ${({ left }) => (left ? "1/2" : "2/3")};
  grid-row: 2/3;
`;
export const CardHeader = styled.h3`
  margin: 0.5rem 0;
`;

export const CardInfo = styled.p`
  margin: 0 0 1rem 0;
  text-align: center;
`;

export const CardDescription = styled(CardInfo)``;

export const CardButtons = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
  margin: 0 -1rem -1rem 0;
  width: calc(100% + 1rem);
  height: calc(100% + 1rem);
  background-color: ${({ theme }) => theme.colors.white};

  border-top: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-left: 1px solid ${({ theme }) => theme.colors.primary.light};
`;

export const CardButton = styled.button`
  flex: 1;
  background-color: transparent;
  border-radius: 0;
  border: none;
  &:first-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.light};
  }
`;
