import styled from "styled-components";
import { FcStatistics } from "react-icons/fc";
export const ActionMenuContainer = styled.section`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.primary.veryLight};
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;

export const ActionGreet = styled.h2`
  margin: 0;
  padding: 2rem 0 0 1rem;
  span {
    text-decoration: underline;
  }
`;

export const ActionStatsContainer = styled.div`
  display: block;
  width: calc(100%-4rem);
  margin: 4rem 2rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  height: max-content;
  box-shadow: 1px 8px 11px -4px rgba(11, 37, 69, 1);
  display: gird;
`;

export const StatsIcon = styled(FcStatistics)`
  display: inline-block;
  font-size: ${({ theme }) => theme.font.size.big};
  margin-right: 2rem;
  box-shadow: 0px 1px ${({ theme }) => theme.colors.black};
`;
export const StatsHeader = styled.h3`
  display: inline-block;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.big};
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.black};
`;

export const StatsCardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const StatsCard = styled.div``;
