import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary.veryLight};
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 1rem;
`;

export const Logo = styled.bdo`
  justify-self: start;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  color: ${({ theme }) => theme.colors.secondary.dark};
  letter-spacing: 1px;
`;
