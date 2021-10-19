import { CategoryButton, CategoryWrapper } from "./styled/Category.styled";

function Category() {
  return (
    <CategoryWrapper>
      <CategoryButton>Pending</CategoryButton>
      <CategoryButton color="red">In Progress</CategoryButton>
      <CategoryButton>Complite</CategoryButton>
    </CategoryWrapper>
  );
}

export default Category;
