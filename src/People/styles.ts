import styled from "styled-components";

export const Container = styled.div`
	background: #F9FAFB;
	height: 100vh;
`;

export const Header = styled.div`
	padding: 24px 0 24px; 
	width: 100%;
	height: auto;
	position: sticky;
	top: 0;
	z-index: sticky;
	background: #F9FAFB;;
`;

export const InnerHeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 7%;
	margin: 0 233px;
`;

export const SearchbarWrapper = styled.div`
	width: 29%;
`;

export const LogoWrapper = styled.div`
	width: 70%;
	display: flex;
	justify-content: flex-start;
`;

export const LogoText = styled.h3`
	margin: 0;
	display: flex;
	text-align: center;
	margin-left: 4px;
	font-weight: 500;
	font-size: 24px;
	color: #72777D;
`

export const StarIconWrapper = styled.div`
	display: flex;
	align-items: center;
	color: #72777D;
	font-size: 24px;
`;

export const SectionWrapper = styled.section`
	width: 100%;
`;

export const InnerSectionWrapper = styled.section`
	padding: 0 7%;
	margin: 0 233px;
`;

export const PeopleWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;
