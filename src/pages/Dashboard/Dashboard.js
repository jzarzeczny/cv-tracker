import ActionMenu from "./components/ActionMenu/ActionMenu";
import { Container } from "../../components/Container.styled";
import Header from "../../components/Header/Header";
import Search from "./components/Search";

function Dashboard() {
  return (
    <Container>
      <Header />
      <ActionMenu />
      <Search />
      <Cards />
    </Container>
  );
}

export default Dashboard;
