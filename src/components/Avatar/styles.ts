import styled, {css} from 'styled-components';


import {INITIAL_LETTERS, InitialLetter} from './initialLetters';

export type SizeInPx = '28' | '32' | '40' | '56';

type StyleProps = {
  initialLetter: InitialLetter;
  sizeInPx: SizeInPx;
};

export const AVATAR_COLOR = [
  '#FD6A7C',
  '#F6B500',
  '#25A458',
  '#F73C02',
  '#9C3AFD',
  '#BCC00C',
  '#00CEDB',
  '#477EEB',
];

const FORM_CASE = 'NFD' as const;
const RGX_NO_DIACRITIC = /[\u0300-\u036f]/g;

const normalizeDiacriticVowel = (initial: InitialLetter) =>
  initial
    .normalize(FORM_CASE)
    .replace(RGX_NO_DIACRITIC, '')
    .toUpperCase() as InitialLetter;

const getBackgroundByInitial = (initial: InitialLetter) => {
  const normalizedLetter: InitialLetter = normalizeDiacriticVowel(initial);
  const letterIndex = INITIAL_LETTERS.indexOf(normalizedLetter);
  if (letterIndex < AVATAR_COLOR.length) {
    return AVATAR_COLOR[letterIndex];
  }

  const multiplier = Math.floor((letterIndex + 1) / AVATAR_COLOR.length);
  return AVATAR_COLOR[letterIndex + 1 - AVATAR_COLOR.length * multiplier];
};

export const Container = styled.div<StyleProps>`
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  ${({sizeInPx, initialLetter}) => css`
    width: ${sizeInPx}px;
    height: ${sizeInPx}px;
    color: white;
    background: ${getBackgroundByInitial(initialLetter)};
  `}
`;

export const LetterWrapper = styled.p`
		font-size: 16px;
		line-height: 20px;
`;
