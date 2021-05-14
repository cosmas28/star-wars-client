import styled from "styled-components";

export const Container = styled.button`
	display: inline-flex;
	font-weight: 400;
	font-size: 14px;
	border: none;
	cursor: pointer;
	position: relative;
	align-items: center;
	color: #202327;
	background: none;

	&:focus {
		outline: 0;
	}
`;

export const Label = styled.p`
	display: flex;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
`;

export const IconWrapper = styled.span`
	display: flex;
	margin-left: 8px;
`;
