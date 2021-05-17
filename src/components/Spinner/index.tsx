import * as React from 'react';

import { Container, SpinElement, StyleProps } from './styles';

type Props = {
  page?: boolean;
} & StyleProps;

export const Spinner: React.FC<Props> = ({ page, size }) => {
  return page ? (
    <Container data-testid="container">
      <SpinElement data-testid="spinner-element" size={size} />
    </Container>
  ) : (
    <SpinElement data-testid="spinner-element" size={size} />
  );
};
