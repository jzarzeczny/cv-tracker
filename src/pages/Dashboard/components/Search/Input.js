import {
  SearchBoxButton,
  SearchBoxContainer,
  SearchBoxForm,
  SearchBoxInput,
} from "./styled/Input.styled";

function Input() {
  return (
    <SearchBoxContainer>
      <SearchBoxForm>
        <SearchBoxInput />
        <SearchBoxButton />
      </SearchBoxForm>
    </SearchBoxContainer>
  );
}

export default Input;
