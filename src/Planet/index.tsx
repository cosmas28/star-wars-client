import * as React from "react";

import {DetailsRow} from "../components/DetailsRow";
import {DetailsPageLayout} from "../components/DetailsPageLayout";
import {ICONS} from "../components/Icons";

import {
	NameWrapper,
	Divider,
	HeaderTitleWrapper,
	HomeIconWrapper,
} from "./styles";

export const Planet: React.FC<{}> = () => {
	return (
		<DetailsPageLayout
			handleBackButtonClick={() => console.log("TO-DO. Back to home page")}
			renderHeader={() => (
				<>
					<HomeIconWrapper>{ICONS["home"]}</HomeIconWrapper>
					<HeaderTitleWrapper>
						<NameWrapper>Naboo</NameWrapper>
					</HeaderTitleWrapper>
				</>
			)}
		>
			<Divider/>
			<DetailsRow
				label="Rotation period"
				value="26"
			/>
			<Divider/>
		</DetailsPageLayout>
	)
}
