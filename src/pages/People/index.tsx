import * as React from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";


import {ICONS} from "../../components/Icons";
import {Input} from "../../components/Input";
import {NotFound} from "../../components/NotFound";
import {PageLayout} from "../../components/PageLayout";
import {Pagination} from "../../components/Pagination";
import {PersonCard, Person} from "../../components/PersonCard";
import {Snackbar} from "../../components/Snackbar";
import {Spinner} from "../../components/Spinner";

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
} from "./styles";

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
`

interface Props extends RouteComponentProps {}

export const People: React.FC<Props> = () => {
	const history = useHistory();
	const [searchTerm, setSearchTerm] = React.useState("");
	const [page, setPage] = React.useState(1)
	const {loading, error, data} = useQuery(GET_PEOPLE_DATA, {
		variables: {
			page,
			search: searchTerm
		}
	})

	const [activeSnackbar, setActiveSnackbar] = React.useState(false);

	const handleInputChange = (value: string) => {
		setSearchTerm(value);
	}

	React.useEffect(() => {
		if (error) setActiveSnackbar(true);
	}, [error]);

	return (
		<PageLayout>
				<Header>
					<InnerHeaderWrapper>
						<LogoWrapper onClick={() => setActiveSnackbar(true)}>
							<StarIconWrapper>
								{ICONS["star"]}
							</StarIconWrapper>
							<LogoText>wars</LogoText>
						</LogoWrapper>
						<SearchbarWrapper>
							<Input
								onChange={handleInputChange}
								placeholder="Search…"
								value={searchTerm}
							/>
						</SearchbarWrapper>
					</InnerHeaderWrapper>
				</Header>
				<SectionWrapper>
					<InnerSectionWrapper>
						{
							loading ? (
								<Spinner size="large" page />
							) : data?.peopleData?.people?.length > 0
								? (
									<PeopleWrapper>
										{
											data.peopleData.people.map((person: Person, index: number) => (
												<PersonCard
													key={index}
													name={person.name}
													height={person.height}
													mass={person.mass}
													homeworld={person.homeworld}
													gender={person.gender}
													onClick={() => history.push(`/person-details/${person.name}`)}
												/>
											))
										}
									</PeopleWrapper>
								) : (
									<NotFound
										iconName="search"
										message="No results found"
										handleClick={() => console.log("TO-DO: Go to home page!")}
										buttonLabel="Go home"
									/>
								)
						}
						{
							data?.peopleData?.count > 10 &&
							<PaginationWrapper>
								<Pagination
									pageCount={data?.peopleData?.count}
									currentPage={page}
									onPageChange={setPage}
									rangeToDisplay={3}
								/>
							</PaginationWrapper>
						}
						<Snackbar close={() => setActiveSnackbar(false)} active={activeSnackbar} >Something seems to wrong with the system</Snackbar>
					</InnerSectionWrapper>
				</SectionWrapper>
		</PageLayout>
	)
}