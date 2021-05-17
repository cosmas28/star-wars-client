import * as React from 'react';

import { ICONS } from '../Icons';

import { Container, Content, Message, CrossIconWrapper } from './styles';

type Props = {
  active: boolean;
  close: () => void;
};

export const Snackbar: React.FC<Props> = ({ active, close, children }) => (
  <Container data-testid="snackbar-container" active={active}>
    <Content>
      <Message>{children}</Message>
      <CrossIconWrapper data-testid="cross-icon" onClick={close}>
        {ICONS.cross}
      </CrossIconWrapper>
    </Content>
  </Container>
);
