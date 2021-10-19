import {
  ActionGreet,
  ActionMenuContainer,
  ActionStatsContainer,
  ReactionIcon,
  SendIcon,
  StatsCard,
  StatsCardContainer,
  StatsHeader,
  StatsHeading,
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
          <StatsHeading>This week:</StatsHeading>
          <StatsCard>
            <SendIcon />
            CV sent: X
          </StatsCard>
          <StatsCard>
            <ReactionIcon />
            Reactions: X
          </StatsCard>
          <StatsHeading>Total:</StatsHeading>
          <StatsCard>
            <SendIcon />
            CV sent: X
          </StatsCard>
          <StatsCard>
            <ReactionIcon />
            Reactions: X
          </StatsCard>
        </StatsCardContainer>
      </ActionStatsContainer>
    </ActionMenuContainer>
  );
}
