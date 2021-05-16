import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { Avatar } from '../../components/Avatar';
import { DetailsRow } from '../../components/DetailsRow';
import { DetailsPageLayout } from '../../components/DetailsPageLayout';
import { Snackbar } from '../../components/Snackbar';

import { extractNumberFromString } from '../../utils/extractNumberFromString';
import { formatCamelCase } from '../../utils/formatCamelCase';

import { DotDivider } from '../../components/PersonCard/styles';
import { AvatarWrapper, NameWrapper, Divider, HomeworldLink, HeaderTitleWrapper } from './styles';

export const GET_PERSON_DETAILS_NAME = gql`
  query GetPersonDetails($name: String!) {
    person(name: $name) {
      name
      height
      mass
      hairColor
      skinColor
      eyeColor
      birthYear
      gender
      homeworld
      films
      species
      vehicles
      starships
      created
      edited
    }
  }
`;

export const PersonDetails: React.FC<{}> = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string }>();
  const { loading, error, data } = useQuery(GET_PERSON_DETAILS_NAME, {
    variables: {
      name,
    },
  });
  const planetId = data?.person?.homeworld
    ? extractNumberFromString(data?.person?.homeworld)
    : undefined;

  const [activeSnackbar, setActiveSnackbar] = React.useState(false);

  React.useEffect(() => {
    if (error) setActiveSnackbar(true);
  }, [error]);

  const onClickBackButton = () => history.goBack();

  const onCloseSnackbar = () => setActiveSnackbar(false);

  return (
    <DetailsPageLayout
      loading={loading}
      handleBackButtonClick={onClickBackButton}
      empty={!data?.person}
      renderHeader={() => (
        <>
          <AvatarWrapper>
            <Avatar
              sizeInPx="56"
              initialLetter={data?.person?.name ? data.person.name.substr(0, 1).toUpperCase() : 'A'}
            />
          </AvatarWrapper>
          <HeaderTitleWrapper>
            <NameWrapper>{data?.person.name}</NameWrapper>
            <DotDivider />
            <HomeworldLink onClick={() => history.push(`/planet/${planetId}`)}>
              Home world
            </HomeworldLink>
          </HeaderTitleWrapper>
        </>
      )}
    >
      <Divider />
      {data?.person &&
        Object.keys(data?.person).map((key, index) => {
          if (key === '__typename' || key === 'homeworld') return undefined;
          return (
            <React.Fragment key={index}>
              <DetailsRow label={formatCamelCase(key)} value={data.person[key]} />
              <Divider />
            </React.Fragment>
          );
        })}
      <Snackbar close={onCloseSnackbar} active={activeSnackbar}>
        System error! Please refresh or go back.
      </Snackbar>
    </DetailsPageLayout>
  );
};
