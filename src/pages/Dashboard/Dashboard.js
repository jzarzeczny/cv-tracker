import ActionMenu from "./components/ActionMenu/ActionMenu";
import { Container } from "../../components/Container.styled";
import Header from "../../components/Header/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";

const dummyData = {
  companyName: "Facebook corporation",
  status: "pending",
  aplicationDate: "25.10.2021",
  salary: "5k - 7k",
  description: "lorem ipsum dori",
};

function Dashboard() {
  return (
    <Container>
      <Header />
      <ActionMenu />
      <Search />
      <Cards data={dummyData} />
    </Container>
  );
}

export default Dashboard;
