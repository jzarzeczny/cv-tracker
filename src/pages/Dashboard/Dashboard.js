import React from "react";
import ActionMenu from "../../components/ActionMenu/ActionMenu";
import { Container } from "../../components/Container.styled";
import Header from "../../components/Header/Header";

function Dashboard() {
  return (
    <Container>
      <Header />
      <ActionMenu />
    </Container>
  );
}

export default Dashboard;
