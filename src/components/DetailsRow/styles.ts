import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const RowText = styled.p`
margin: 0;
font-size: 14px;
line-height: 20px;
`;

export const RowLabel = styled(RowText)`
	font-weight: 400;
	color: #72777D;
`;

export const RowValue = styled(RowText)`
	font-weight: 500;
	color: #202327;
`;
