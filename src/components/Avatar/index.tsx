import * as React from 'react';

import { InitialLetter } from './initialLetters';
import { Container, LetterWrapper, SizeInPx } from './styles';

type Props = {
  initialLetter: InitialLetter;
  sizeInPx: SizeInPx;
};

export const Avatar: React.FunctionComponent<Props> = ({ initialLetter, sizeInPx = '32' }) => {
  return (
    <Container sizeInPx={sizeInPx} initialLetter={initialLetter}>
      <LetterWrapper>{initialLetter}</LetterWrapper>
    </Container>
  );
};
