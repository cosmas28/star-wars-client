import * as React from "react";

import {IconButton} from "../IconButton";

import {
	MainSection,
	InnerSection,
	HeaderWrapper,
	ContentWrapper,
	Footer,
} from "./styles";

type Props = {
	renderHeader: () => JSX.Element;
	handleBackButtonClick: () => void;
}

export const DetailsPageLayout: React.FC<Props> = ({renderHeader, handleBackButtonClick, children}) => {
	return (
		<MainSection>
			<InnerSection>
				<HeaderWrapper>
					{renderHeader()}
				</HeaderWrapper>
				<ContentWrapper>
					{children}
				</ContentWrapper>
				<Footer>
					<IconButton
						onClick={handleBackButtonClick}
						iconName="chevronLeft"
					>
						Back
					</IconButton>
				</Footer>
			</InnerSection>
		</MainSection>
	)
}
