import * as React from 'react';

import { Container, Content, Message, ActionLabel } from './styles';

type Props = {
  active: boolean;
  onClick: () => void;
  actionLabel: string;
};

export const Snackbar: React.FC<Props> = ({ active, onClick, children, actionLabel }) => (
  <Container data-testid="snackbar-container" active={active}>
    <Content>
      <Message>{children}</Message>
      <ActionLabel data-testid="snackbar-action" onClick={onClick}>
        {actionLabel}
      </ActionLabel>
    </Content>
  </Container>
);
