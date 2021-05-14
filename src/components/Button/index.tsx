import * as React from "react";

import {IconName, ICONS} from "../Icons";

import {Container, Label, IconWrapper} from "./styles";

type Props = {
	label: string;
	trailingIcon?: IconName;
	onClick: () => void;
}

export const Button: React.FC<Props> = ({label, trailingIcon, onClick}) => (
	<Container onClick={onClick}>
		<Label>{label}</Label>
		{trailingIcon && <IconWrapper>{ICONS[trailingIcon]}</IconWrapper>}
	</Container>
)
