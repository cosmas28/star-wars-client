import * as React from "react";

import {validDate, formatDate} from "../../utils/date";

import {Container, RowLabel, RowValue} from "./styles";

type Props = {
	label: string;
	value: string;
}

export const DetailsRow: React.FC<Props> = ({label, value}) => {
	const formattedValue = validDate(value) ? formatDate(value) : value === null ? "n/a" : value;

	return (
		<Container>
			<RowLabel>{label}</RowLabel>
			<RowValue>{formattedValue}</RowValue>
		</Container>
	);
};
