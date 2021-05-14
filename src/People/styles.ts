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
	width: 48%;
`;

export const BackbuttonWrapper = styled.div`
	width: 48%;
	display: flex;
	justify-content: flex-end;
	color: #72777D;
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
