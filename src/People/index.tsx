import * as React from "react";

import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {NotFound} from "../components/NotFound";
import {PageLayout} from "../components/PageLayout";
import {PersonCard} from "../components/PersonCard"

import {
	Container,
	InnerHeaderWrapper,
	Header,
	SearchbarWrapper,
	BackbuttonWrapper,
	SectionWrapper,
	InnerSectionWrapper,
	PeopleWrapper,
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
						<SearchbarWrapper>
							<Input
								onChange={handleInputChange}
								placeholder="Search…"
								value={searchTerm}
							/>
						</SearchbarWrapper>
						<BackbuttonWrapper>
							<Button variant="secondary" trailingIcon="chevronRight" onClick={() => console.log("clicked")}>Go back</Button>
						</BackbuttonWrapper>
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
