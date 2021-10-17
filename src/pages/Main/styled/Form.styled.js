import styled from "styled-components";

export const LoginFormContainer = styled.div`
  margin: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary.normal};
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    margin: 2rem;
    max-width: 400px;
  }
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    margin: 3rem;
  }
`;

export const FormButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;
export const FormButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ active, theme }) =>
    (active && theme.colors.white) || theme.colors.primary.normal};
  flex: 1;
  font-size: ${({ theme }) => theme.font.size.big};
  color: ${({ active, theme }) =>
    (active && theme.colors.black) || theme.colors.white};
`;

export const Form = styled.form`
  padding: 1rem;
  display: flex;
  margin: 1rem auto 0;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    margin: 0 auto;
  }
`;
export const FormControl = styled.div`
  margin-top: 2rem;
  max-width: 90%;
  display: block;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin-bottom: 0.5rem;
`;

export const InputText = styled.input`
  padding: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.primary.normal};
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    padding: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    padding: 0.75rem;
  }
`;

export const ErrorText = styled.span`
  position: absolute;
  display: block;
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.secondary.main};
  bottom: -1.25rem;
`;

export const SubmitButton = styled.input`
  display: block;
  padding: 0.5rem 1rem;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.primary.normal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
`;
