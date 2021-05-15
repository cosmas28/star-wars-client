import * as React from "react";

import {ICONS} from "../components/Icons";
import {Input} from "../components/Input";
import {NotFound} from "../components/NotFound";
import {PageLayout} from "../components/PageLayout";
import {PersonCard} from "../components/PersonCard"

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
} from "./styles";

export const People: React.FC<{}> = () => {
	const [searchTerm, setSearchTerm] = React.useState("");

	const handleInputChange = (value: string) => {
		setSearchTerm(value);
	}

	return (
		<PageLayout>
				<Header>
					<InnerHeaderWrapper>
						<LogoWrapper>
							<StarIconWrapper>
								{ICONS["star"]}
							</StarIconWrapper>
							<LogoText>Wars</LogoText>
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
							searchTerm
								? (
									<PeopleWrapper>
										<PersonCard
											name="Luke Skywalker"
											height="144"
											mass="63"
											homeworld="http://swapi.dev/api/planets/1/"
											gender="male"
											onClick={() => console.log("you've clicked, Luke Skywalker")}
										/>
										<PersonCard
											name="C-3PO"
											height="144"
											mass="63"
											homeworld="http://swapi.dev/api/planets/1/"
											gender="male"
											onClick={() => console.log("you've clicked, Luke Skywalker")}
										/>
										<PersonCard
											name="R2-D2"
											height="144"
											mass="63"
											homeworld="http://swapi.dev/api/planets/1/"
											gender="male"
											onClick={() => console.log("you've clicked, Luke Skywalker")}
										/>
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
					</InnerSectionWrapper>
				</SectionWrapper>
		</PageLayout>
	)
}
