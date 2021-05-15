import styled, {css} from 'styled-components';

type StyleProps = {
  selected?: boolean;
  disabled?: boolean;
};

export const PageBreak = styled.span`
  display: flex;
  align-items: center;
  color: #B3B7BC;
`;

const Label = styled.span`
  color: #72777D;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #4A4E55;
  }

  ${(props: StyleProps) =>
    props.disabled &&
    css`
      &,
      &:hover,
      &:focus {
        color: #B3B7BC;
        cursor: not-allowed;
      }
    `}
`;

export const PreviousPage = styled(Label)`
  border-right: 1px solid #E4E6E8;
  padding-right: 20px;
  margin-right: 8px;
`;

export const NextPage = styled(Label)`
  border-left: 1px solid #E4E6E8;
  padding-left: 20px;
  margin-left: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  height: 48px;
  border-top: 1px solid #E4E6E8;
  box-sizing: border-box;
`;

export const PagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

export const PageSelector = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
  margin: 0 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #72777D;

  &:hover {
    color: #4A4E55;
  }

  &:focus {
    outline: none;
  }

  ${(props: StyleProps) =>
    props.selected &&
    css`
      &,
      &:hover {
        color: #202327;
      }
    `}
`;
