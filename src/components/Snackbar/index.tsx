import * as React from "react";

import {Container} from "./styles";

type Props = {
	active: boolean;
}

export const Snackbar: React.FC<Props> = ({active, children}) => (
	<Container active={active}>{children}</Container>
);
