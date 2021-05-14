import * as React from "react";

import {NotFound} from "../components/NotFound";
import {PageLayout} from "../components/PageLayout";

export const PageNotFound: React.FC<{}> = () => (
	<PageLayout>
		<NotFound
			message="Sorry! This page is not yet built!"
			iconName="search"
			handleClick={() => console.log("TO-Do: should redirect to home page!")}
			buttonLabel="Please go to home page"
		/>
	</PageLayout>
);
