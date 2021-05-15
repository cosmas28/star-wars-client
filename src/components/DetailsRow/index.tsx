import * as React from "react";

import {Container, RowLabel, RowValue} from "./styles";

type Props = {
	label: string;
	value: string;
}

export const DetailsRow: React.FC<Props> = ({label, value}) => (
	<Container>
		<RowLabel>{label}</RowLabel>
		<RowValue>{value}</RowValue>
	</Container>
);
