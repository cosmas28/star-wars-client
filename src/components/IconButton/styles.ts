import styled from "styled-components";

export const Container = styled.button`
	border-radius: 50px;
	border: 1px solid #2097F9;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	align-self: stretch;
	background: none;
	color: #2097F9;
	width: 48px;
	height: 48px;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		color: #055EA8;
		border-color: #055EA8;
	}

	&:focus {
		outline: 0;
	}

	@media screen and (max-width: 960px) {
		font-size: 24px;
	}

	@media screen and (max-width: 480px) {
		font-size: 24px;
	}
`;
