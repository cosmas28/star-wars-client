import * as React from "react";

import {Button} from "../components/Button";
import {Input} from "../components/Input";

import {Container, InnerHeaderWrapper, InnerContainer, Header, SearchbarWrapper, BackbuttonWrapper} from "./styles";

export const People: React.FC<{}> = () => {
	const [searchTerm, setSearchTerm] = React.useState("");

	const handleInputChange = (value: string) => {
		setSearchTerm(value);
	}

	return (
		<Container>
			<InnerContainer>
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

			</InnerContainer>
		</Container>
	)
}
