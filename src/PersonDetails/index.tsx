import * as React from "react";

import {Avatar} from "../components/Avatar";
import {Button} from "../components/Button";
import {IconButton} from "../components/IconButton";

import {
	MainSection,
	InnerSection,
	HeaderWrapper,
	AvatarWrapper,
	NameWrapper,
	ContentWrapper,
	Divider,
	RowWrapper,
	RowLabel,
	RowValue,
	Footer,
} from "./styles";

export const PersonDetails: React.FC<{}> = () => {
	return (
		<MainSection>
			<InnerSection>
				<HeaderWrapper>
					<AvatarWrapper><Avatar sizeInPx="56" initialLetter="L" /></AvatarWrapper>
					<NameWrapper>Leia Organa</NameWrapper>
				</HeaderWrapper>
				<ContentWrapper>
					<RowWrapper>
						<RowLabel>Height</RowLabel>
						<RowValue>150 cm</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Mass</RowLabel>
						<RowValue>72 Kg</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Hair color</RowLabel>
						<RowValue>Brown</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Skin color</RowLabel>
						<RowValue>light</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Eye color</RowLabel>
						<RowValue>brown</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Birth year</RowLabel>
						<RowValue>19BBY</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Gender</RowLabel>
						<RowValue>female</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Films</RowLabel>
						<RowValue>54</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Species</RowLabel>
						<RowValue>3</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Vehicles</RowLabel>
						<RowValue>4</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Starships</RowLabel>
						<RowValue>0</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Created</RowLabel>
						<RowValue>2014-12-10</RowValue>
					</RowWrapper>
					<Divider/>
					<RowWrapper>
						<RowLabel>Last edited</RowLabel>
						<RowValue>2014-12-20</RowValue>
					</RowWrapper>
					<Divider/>
				</ContentWrapper>
				<Footer>
					<IconButton
						onClick={() => console.log("TO-DO. Back to home page")}
						iconName="chevronLeft"
					>
						Back
					</IconButton>
				</Footer>
			</InnerSection>
		</MainSection>
	)
}
