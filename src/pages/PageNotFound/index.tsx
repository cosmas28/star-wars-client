import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { NotFound } from '../../components/NotFound';
import { PageLayout } from '../../components/PageLayout';

export const PageNotFound: React.FC<{}> = () => {
  const history = useHistory();

  const onClickHome = () => history.push('/');

  return (
    <PageLayout>
      <NotFound
        message="Sorry! This page is not yet built!"
        iconName="exclamationTriangle"
        handleClick={onClickHome}
        buttonLabel="Please go to home page"
      />
    </PageLayout>
  );
};

export default PageNotFound;
