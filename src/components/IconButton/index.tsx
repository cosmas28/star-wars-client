import * as React from 'react';

import { ICONS, IconName } from '../Icons';

import { Container } from './styles';

type Props = {
  iconName: IconName;
  onClick: () => void;
};

export const IconButton: React.FC<Props> = ({ iconName, onClick }) => {
  return (
    <Container data-testid="icon-button" onClick={onClick}>
      {ICONS[iconName]}
    </Container>
  );
};
