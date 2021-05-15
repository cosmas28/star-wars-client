import * as React from "react";

import {Avatar} from "../components/Avatar";
import {DetailsRow} from "../components/DetailsRow";
import {DetailsPageLayout} from "../components/DetailsPageLayout";

import {DotDivider} from "../components/PersonCard/styles"
import {
	AvatarWrapper,
	NameWrapper,
	Divider,
	HomeworldLink,
	HeaderTitleWrapper
} from "./styles";

export const PersonDetails: React.FC<{}> = () => {
	return (
		<DetailsPageLayout
			handleBackButtonClick={() => console.log("TO-DO. Back to home page")}
			renderHeader={() => (
				<>
					<AvatarWrapper><Avatar sizeInPx="56" initialLetter="L" /></AvatarWrapper>
					<HeaderTitleWrapper>
						<NameWrapper>Leia Organa</NameWrapper>
						<DotDivider/>
						<HomeworldLink>Home world</HomeworldLink>
					</HeaderTitleWrapper>
				</>
			)}
		>
			<Divider/>
			<DetailsRow
				label="Height"
				value="150 cm"
			/>
			<Divider/>
		</DetailsPageLayout>
	)
}
