import styled from "styled-components";

export const Container = styled.div`
  width: 1400px;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
`;

export const MainContainer = styled(Container)`
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;
    & > * {
      flex: 1;
    }
  }
  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    display: flex;
    flex-flow: row nowrap;
    max-width: 1200px;
    max-height: 100vh;

    & > * {
      flex: 1;
    }
  }
`;
