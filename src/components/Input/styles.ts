import styled from "styled-components";

export const InputElementWrapper = styled.div`
	display: inline-flex;
	position: relative;
	width: 100%;
	align-items: center;
	color: #72777D;
`;

export const InputElement = styled.input`
	padding: 7px;
	border-radius: 6px;
	font-size: 14px;
	line-height: 20px;
	border: 1px solid #D1D5DB;
	width: 100%;
	background: white;
	color: #202327;

	&:hover {
		border-color: #B3B7BC;
	}

	&:focus,
	&:focus:hover {
		outline: 0;
		border-color: #72777D;
		background: white;
	}
`;

export const ClearIconWrapper = styled.div`
	position: absolute;
	right: 12px;
	display: inline-flex;
	color: #B3B7BC;

	&:focus,
	&:hover {
		color: #72777D;
	}
`;
