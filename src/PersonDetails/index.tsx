import * as React from "react";
import {useParams, useHistory} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";

import {Avatar} from "../components/Avatar";
import {DetailsRow} from "../components/DetailsRow";
import {DetailsPageLayout} from "../components/DetailsPageLayout";
import {NotFound} from "../components/NotFound";
import {Snackbar} from "../components/Snackbar";

import {DotDivider} from "../components/PersonCard/styles"
import {
	AvatarWrapper,
	NameWrapper,
	Divider,
	HomeworldLink,
	HeaderTitleWrapper
} from "./styles";

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
			url
		}
	}
`

export const PersonDetails: React.FC<{}> = () => {
	const history = useHistory();
	const {name} = useParams<{name: string}>();
	const {loading, error, data} = useQuery(GET_PERSON_DETAILS_NAME, {
		variables: {
			name,
		}
	})

	return (
		<DetailsPageLayout
			loading={loading}
			handleBackButtonClick={() => history.push("/")}
			renderHeader={() => (
				<>
					<AvatarWrapper>
						<Avatar
							sizeInPx="56"
							initialLetter={data?.person?.name ? data.person.name.substr(0, 1).toUpperCase() : ("A")}
						/>
					</AvatarWrapper>
					<HeaderTitleWrapper>
						<NameWrapper>{data?.person.name}</NameWrapper>
						<DotDivider/>
						<HomeworldLink>Home world</HomeworldLink>
					</HeaderTitleWrapper>
				</>
			)}
		>
			{
				data?.person ? (
					<>
						<Divider/>
						{
							Object.keys(data?.person).map((key, index) => (
								<React.Fragment key={index}>
									<DetailsRow
										label={key}
										value={data.person[key]}
									/>
									<Divider/>
								</React.Fragment>
							))
						}
					</>
					) : (
						<NotFound
							iconName="search"
							message="No results found"
							handleClick={() => console.log("TO-DO: Go to home page!")}
							buttonLabel="Go home"
						/>
					)
			}
		<Snackbar active={!!error} >Something seems to wrong with the system. Please try again later!</Snackbar>
		</DetailsPageLayout>
	)
}
