import * as React from 'react';

import { IconName, ICONS } from '../Icons';

import { Container, Label, IconWrapper, StyleProps } from './styles';

type Props = {
  trailingIcon?: IconName;
  onClick: () => void;
} & StyleProps;

export const Button: React.FC<Props> = ({ children, trailingIcon, onClick, variant }) => (
  <Container onClick={onClick} variant={variant}>
    <Label>{children}</Label>
    {trailingIcon && <IconWrapper>{ICONS[trailingIcon]}</IconWrapper>}
  </Container>
);
