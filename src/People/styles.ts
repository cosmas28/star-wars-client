import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	background: #F9FAFB;
`;

export const InnerContainer = styled.div`
	max-width: 100%;
	margin: 0 233px;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
	padding: 24px 0 24px; 
	width: 100%;
	height: auto;
	position: sticky;
	top: 0;
	z-index: sticky;
`;

export const InnerHeaderWrapper = styled.div`
	display: flex;
	padding: 16px 0 16px;
	justify-content: space-between;
	padding: 0 7%;
	width: 100%;
	align-items: center;
`;

export const SearchbarWrapper = styled.div`
	width: 48%;
`;

export const BackbuttonWrapper = styled.div`
	width: 48%;
	display: flex;
	justify-content: center;
	color: #72777D;
	align-items: center;
`;
