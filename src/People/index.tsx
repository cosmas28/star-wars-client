import * as React from "react";
import styled from "styled-components";

import {Button} from "../components/Button";
import {Input} from "../components/Input";


const Container = styled.div`
	height: 100vh;
	background: #F9FAFB;
`;

const InnerContainer = styled.div`
	max-width: 100%;
	margin: 0 233px;
	display: flex;
	flex-direction: column;
`;

const Header = styled.div`
	padding: 24px 0 24px; 
	width: 100%;
	height: auto;
	position: sticky;
	top: 0;
	z-index: sticky;
`;

const InnerHeaderWrapper = styled.div`
	display: flex;
	padding: 16px 0 16px;
	justify-content: space-between;
	padding: 0 7%;
	width: 100%;
	align-items: center;
`;

const SearchbarWrapper = styled.div`
	width: 48%;
`;

const BackbuttonWrapper = styled.div`
	width: 48%;
	display: flex;
	justify-content: center;
	color: #72777D;
	align-items: center;
`;


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
