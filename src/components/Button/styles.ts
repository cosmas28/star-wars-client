import styled, {css} from "styled-components";

export type StyleProps = {
	variant?: "primary" | "secondary";
}

const VARIANT_STYLES = {
	primary: css`
		border: 1px solid #2097F9;
		color: #2097F9;
		border-radius: 6px;
		padding: 8px 16px;
	`,
	secondary: css`
		border: none;
		color: #202327;
	`
}

export const Container = styled.button<StyleProps>`
	display: inline-flex;
	font-weight: 400;
	font-size: 14px;
	cursor: pointer;
	position: relative;
	align-items: center;
	background: none;
	${({variant}) => VARIANT_STYLES[variant || "primary"]}

	&:focus {
		outline: 0;
	}
`;

export const Label = styled.p`
	margin: 0;
	display: flex;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
`;

export const IconWrapper = styled.span`
	display: flex;
	margin-left: 8px;
`;
