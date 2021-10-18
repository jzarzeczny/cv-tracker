import React from "react";
import {
  ActionGreet,
  ActionMenuContainer,
  ActionStatsContainer,
  StatsCard,
  StatsCardContainer,
  StatsHeader,
  StatsIcon,
} from "./styled/ActionMenu.styled";

export default function ActionMenu() {
  return (
    <ActionMenuContainer>
      <ActionGreet>
        Greeting, <span>Traveler</span>
      </ActionGreet>
      <ActionStatsContainer>
        <StatsIcon />
        <StatsHeader>Statistics</StatsHeader>
        <StatsCardContainer>
          <StatsCard />
        </StatsCardContainer>
      </ActionStatsContainer>
    </ActionMenuContainer>
  );
}
