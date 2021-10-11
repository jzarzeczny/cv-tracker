import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary.veryLight};
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    display: grid;
    grid-template-columns: 2rem 1fr 2rem;
    grid-template-rows: 2rem 4fr 1fr 2rem;
  }
`;

export const HeroImage = styled.img`
  width: 60%;
  top: 50%;
  right: 50%;
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    width: 100%;
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: center;
  }
`;

export const HeroDecorations = styled.img`
  position: absolute;
  width: 20%;
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    width: 30%;
  }
  &:first-of-type {
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    bottom: 0;
    right: 0;
    transform: rotate(180deg);
  }
`;

export const TextContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    grid-column: 2/3;
    grid-row: 3/4;
    align-self: start;
  }
`;

export const HeroTitle = styled.h2`
  position: absolute;
  top: 55%;
  right: 15%;
  display: block;
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    position: relative;
    top: auto;
    right: auto;
    grid-column: 2/3;
    grid-row: 3/4;
    align-self: start;
  }
`;

export const HeroPara = styled.p`
  position: absolute;
  top: 70%;
  right: 25%;
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    top: auto;
    right: auto;
    position: relative;

    justify-self: start;
    grid-column: 2/3;
    grid-row: 3/4;
  }
`;
