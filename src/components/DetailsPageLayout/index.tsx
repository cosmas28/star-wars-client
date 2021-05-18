import * as React from 'react';

import { IconButton } from '../IconButton';
import { NotFound } from '../../components/NotFound';
import { Spinner } from '../Spinner';

import { MainSection, InnerSection, HeaderWrapper, ContentWrapper, Footer } from './styles';

type Props = {
  renderHeader: () => JSX.Element;
  handleBackButtonClick: () => void;
  loading?: boolean;
  empty?: boolean;
  errorMessage: string;
};

export const DetailsPageLayout: React.FC<Props> = ({
  renderHeader,
  handleBackButtonClick,
  loading,
  children,
  empty,
  errorMessage
}) => {
  return (
    <MainSection>
      <InnerSection>
        {loading ? (
          <Spinner page={true} size="large" />
        ) : empty ? (
          <NotFound
            iconName="exclamationTriangle"
            message={errorMessage}
            handleClick={handleBackButtonClick}
            buttonLabel="Previous page"
          />
        ) : (
          <>
            <HeaderWrapper>{renderHeader()}</HeaderWrapper>
            <ContentWrapper>{children}</ContentWrapper>
            <Footer>
              <IconButton onClick={handleBackButtonClick} iconName="chevronLeft" />
            </Footer>
          </>
        )}
      </InnerSection>
    </MainSection>
  );
};
