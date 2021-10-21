import styled from "styled-components";

export const CategoryWrapper = styled.div`
  margin: 0 1rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border: 4px solid ${({ theme }) => theme.colors.primary.light};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CategoryLabel = styled.label``;
export const CategoryCheck = styled.input.attrs({ type: "radio" })`
  width: 0;
  height: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
`;

export const CategoryPseudoCheck = styled.div`
  padding: 0.75rem 1.5rem;
  border: 2px solid black;
  background: ${({ checked, theme }) => checked && theme.colors.gray.light};
`;
