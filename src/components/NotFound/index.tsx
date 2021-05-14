import * as React from "react";

import {Button} from "../Button";
import {ICONS, IconName} from  "../Icons";

import {
	EmptyPageWrapper,
	IconWrapper,
	Message,
} from "./styles";

type Props = {
	iconName: IconName;
	message: string;
	handleClick?: () => void;
	buttonLabel?: string;
};

export const NotFound: React.FC<Props> = ({iconName, message, handleClick, buttonLabel}) => (
	<EmptyPageWrapper>
		<IconWrapper>{ICONS[iconName]}</IconWrapper>
		<Message>{message}</Message>
		{
			handleClick && buttonLabel &&
			<Button onClick={handleClick}>{buttonLabel}</Button>
		}
	</EmptyPageWrapper>
);
