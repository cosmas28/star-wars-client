import * as React from "react";

import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {PersonCard} from "../components/PersonCard"

import {
	Container,
	InnerHeaderWrapper,
	Header,
	SearchbarWrapper,
	BackbuttonWrapper,
	SectionWrapper,
	InnerSectionWrapper,
} from "./styles";

export const People: React.FC<{}> = () => {
	const [searchTerm, setSearchTerm] = React.useState("");

	const handleInputChange = (value: string) => {
		setSearchTerm(value);
	}

	return (
		<Container>
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
							<Button label="Go back" trailingIcon="chevronRight" onClick={() => console.log("clicked")}/>
						</BackbuttonWrapper>
					</InnerHeaderWrapper>
				</Header>
				<SectionWrapper>
					<InnerSectionWrapper>
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
					</InnerSectionWrapper>
				</SectionWrapper>
		</Container>
	)
}
