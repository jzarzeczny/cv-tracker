import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.light};
  margin: 0 1rem;
  padding: 1rem 0;
`;

export const SearchBoxForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SearchBoxInput = styled.input.attrs({ placeholder: "Search..." })`
  padding: 0.25rem;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary.main};
    outline-offset: -1px;
  }
`;

export const SearchBoxButton = styled.input.attrs({
  type: "submit",
  value: "Search",
})`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
`;
