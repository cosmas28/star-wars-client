import * as React from "react";

import {IconButton} from "../IconButton";
import {Spinner} from "../Spinner";

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
	loading?: boolean;
}

export const DetailsPageLayout: React.FC<Props> = ({renderHeader, handleBackButtonClick, loading, children}) => {
	return (
		<MainSection>
			<InnerSection>
				{
					loading ? (
						<Spinner page size="large" />
					) : (
						<>
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
						</>
					)
				}
			</InnerSection>
		</MainSection>
	)
}
