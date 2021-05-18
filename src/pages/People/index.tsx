import { debounce } from 'debounce';
import React, { useMemo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { ICONS } from '../../components/Icons';
import { Input } from '../../components/Input';
import { NotFound } from '../../components/NotFound';
import { PageLayout } from '../../components/PageLayout';
import { Pagination } from '../../components/Pagination';
import { PersonCard, Person } from '../../components/PersonCard';
import { Snackbar } from '../../components/Snackbar';
import { Spinner } from '../../components/Spinner';

import {
  InnerHeaderWrapper,
  Header,
  SearchbarWrapper,
  SectionWrapper,
  InnerSectionWrapper,
  PeopleWrapper,
  StarIconWrapper,
  LogoWrapper,
  LogoText,
  PaginationWrapper,
} from './styles';

export const GET_PEOPLE_DATA = gql`
  query GetPeopleData($page: Int, $search: String) {
    peopleData(page: $page, search: $search) {
      count
      people {
        name
        height
        gender
        mass
        homeworld
      }
    }
  }
`;

const PAGE_SIZE = 10;

export const People: React.FC<{}> = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [delayedSearchTerm, setDelayedSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_PEOPLE_DATA, {
    variables: {
      page,
      search: delayedSearchTerm,
    },
  });

  const pageCount = useMemo(
    () => Math.ceil(data?.peopleData?.count / PAGE_SIZE),
    [data?.peopleData?.count]
  );

  const [activeSnackbar, setActiveSnackbar] = useState(false);

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    handleDebounce(value);
  };

  const handleDebounce = debounce((searchQuery: string) => setDelayedSearchTerm(searchQuery), 1000);

  useEffect(() => {
    if (error) setActiveSnackbar(true);
  }, [error]);

  const onClickPerson = (name: string) => () => history.push(`/person-details/${name}`);

  const onClockSnackbar = () => setActiveSnackbar(false);

  return (
    <PageLayout>
      <Header>
        <InnerHeaderWrapper>
          <LogoWrapper>
            <StarIconWrapper>{ICONS.star}</StarIconWrapper>
            <LogoText>wars</LogoText>
          </LogoWrapper>
          <SearchbarWrapper>
            <Input onChange={handleInputChange} placeholder="Search…" value={searchTerm} />
          </SearchbarWrapper>
        </InnerHeaderWrapper>
      </Header>
      <SectionWrapper>
        <InnerSectionWrapper>
          {loading ? (
            <Spinner size="large" page={true} />
          ) : data?.peopleData?.people?.length > 0 ? (
            <PeopleWrapper>
              {data.peopleData.people.map((person: Person, index: number) => (
                <PersonCard
                  key={index}
                  name={person.name}
                  height={person.height}
                  mass={person.mass}
                  homeworld={person.homeworld}
                  gender={person.gender}
                  onClick={onClickPerson(person.name)}
                />
              ))}
            </PeopleWrapper>
          ) : (
            <NotFound iconName="search" message="No results found!" />
          )}
          {pageCount > 1 && (
            <PaginationWrapper>
              <Pagination
                pageCount={pageCount}
                currentPage={page}
                onPageChange={setPage}
                rangeToDisplay={3}
              />
            </PaginationWrapper>
          )}
          <Snackbar close={onClockSnackbar} active={activeSnackbar}>
            Something seems to wrong with the system
          </Snackbar>
        </InnerSectionWrapper>
      </SectionWrapper>
    </PageLayout>
  );
};

export default People;
