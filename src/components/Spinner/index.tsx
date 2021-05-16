import * as React from "react";

import {Container, SpinElement, StyleProps} from "./styles";

type Props = {
	page?: boolean;
} & StyleProps;

export const Spinner: React.FC<Props> = ({page, size}) => {
	return page ? <Container><SpinElement size={size} /></Container> : <SpinElement size={size} />;
}