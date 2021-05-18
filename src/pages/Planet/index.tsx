import { gql, useQuery } from '@apollo/client';
import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { DetailsRow } from '../../components/DetailsRow';
import { DetailsPageLayout } from '../../components/DetailsPageLayout';
import { ICONS } from '../../components/Icons';
import { formatCamelCase } from '../../utils/formatCamelCase';

import { NameWrapper, Divider, HeaderTitleWrapper, HomeIconWrapper } from './styles';

export const GET_PLANET_DETAILS_BY_ID = gql`
  query GetPlanetDetails($id: String!) {
    planet(id: $id) {
      name
      rotationPeriod
      orbitalPeriod
      diameter
      climate
      gravity
      terrain
      surfaceWater
      population
      residents
      films
      created
      edited
    }
  }
`;

export const Planet: React.FC<{}> = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_PLANET_DETAILS_BY_ID, {
    variables: {
      id,
    },
  });

  const onClickBackButton = () => history.goBack();

  return (
    <DetailsPageLayout
      loading={loading}
      handleBackButtonClick={onClickBackButton}
      empty={!data?.planet || !!error}
      errorMessage={`Planet with the id ${id} does not exist!`}
      renderHeader={() => (
        <>
          <HomeIconWrapper>{ICONS.home}</HomeIconWrapper>
          <HeaderTitleWrapper>
            <NameWrapper>{data?.planet?.name}</NameWrapper>
          </HeaderTitleWrapper>
        </>
      )}
    >
      <Divider />
      {data?.planet &&
        Object.keys(data.planet).map((key, index) => {
          if (key === '__typename') return undefined;
          return (
            <React.Fragment key={index}>
              <DetailsRow label={formatCamelCase(key)} value={data.planet[key]} />
              <Divider />
            </React.Fragment>
          );
        })}
    </DetailsPageLayout>
  );
};

export default Planet;
