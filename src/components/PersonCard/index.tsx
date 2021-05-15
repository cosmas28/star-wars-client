import * as React from "react";

import {Avatar} from "../Avatar";
import {InitialLetter} from "../Avatar/initialLetters";
import {ICONS} from "../Icons";

import {
	Container,
	InnerContainer,
	Head,
	DetailsLink,
	DetailsRow,
	DetailsText,
	DetailsWrapper,
	ChevronRightWrapper,
	DotDivider,
	AvataWrapper,
	Content,
} from "./styles";

export type Person = {
	name: string;
	height: string;
	mass: string;
	homeworld: string;
	gender: "male" | "Female" | "n/a";
}

type Props = {
	onClick: () => void;
} & Person;

export const PersonCard: React.FC<Props> = ({
	name,
	height,
	mass,
	homeworld,
	gender,
	onClick,
}) => {
	return (
		<Container>
			<InnerContainer>
				<AvataWrapper>
					<Avatar
						sizeInPx="40"
						initialLetter={name.substr(0, 1).toUpperCase() as InitialLetter}
					/>
				</AvataWrapper>
				<Content>
					<DetailsWrapper>
						<Head>{name}</Head>
						<DetailsRow>
							<DetailsText>{gender}</DetailsText>
							<DotDivider />
							<DetailsText>{mass} Kg</DetailsText>
							<DotDivider />
							<DetailsText>{height} cm</DetailsText>
							<DotDivider />
							<DetailsLink onClick={() => console.log("Todo: go to another planets page", homeworld)}>Homeworld</DetailsLink>
						</DetailsRow>
					</DetailsWrapper>
					<ChevronRightWrapper onClick={onClick}>{ICONS["chevronRight"]}</ChevronRightWrapper>
				</Content>
			</InnerContainer>
		</Container>
	);
};
