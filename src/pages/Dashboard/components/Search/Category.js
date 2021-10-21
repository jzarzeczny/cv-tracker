import { useState } from "react";
import {
  CategoryCheck,
  CategoryLabel,
  CategoryPseudoCheck,
  CategoryWrapper,
} from "./styled/Category.styled";

const checkboxes = ["Current", "Past", "All"];

function Category() {
  const [checked, setChecked] = useState("All");

  const handleChange = (input) => {
    setChecked(input.target.id);
  };
  return (
    <CategoryWrapper>
      {checkboxes.map((checkbox, id) => (
        <CategoryLabel htmlFor={checkbox} key={id}>
          <CategoryCheck id={checkbox} onChange={handleChange} name="filters" />
          <CategoryPseudoCheck checked={checkbox === checked}>
            {checkbox}
          </CategoryPseudoCheck>
        </CategoryLabel>
      ))}
    </CategoryWrapper>
  );
}

export default Category;
