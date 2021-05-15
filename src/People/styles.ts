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

	@media screen and (min-width: 1441px) {
		padding: 0 8%;
		margin: 0 14%;
	}

	@media screen and (max-width: 1440px) {
		padding: 0 6%;
    margin: 0 10%;
	}

	@media screen and (max-width: 960px) {
		padding: 0 3.5%;
		margin: 0 5%;
	}

	@media screen and (max-width: 480px) {
		padding: 0 4%;
		margin: 0 1%;
	}
`;

export const SearchbarWrapper = styled.div`
	display: flex;
	align-items: center;

	@media screen and (min-width: 1441px) {
		width: 39%;
	}

	@media screen and (max-width: 1440px) {
		width: 39%;
	}

	@media screen and (max-width: 960px) {
		width: 49%;
	}

	@media screen and (max-width: 480px) {
		width: 69%;
	}
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: #2097F9;
	font-size: 24px;

	@media screen and (min-width: 1441px) {
		width: 60%;
	}

	@media screen and (max-width: 1440px) {
		width: 60%;
	}
	
	@media screen and (max-width: 960px) {
		width: 50%;
	}

	@media screen and (max-width: 480px) {
		width: 30%;
	}
`;

export const LogoText = styled.h3`
	margin: 0;
	display: flex;
	margin-left: 4px;
	font-weight: 500;
	align-items: center;
`

export const StarIconWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const SectionWrapper = styled.section`
	width: 100%;
`;

export const InnerSectionWrapper = styled.section`
	@media screen and (min-width: 1441px) {
		padding: 0 7%;
		margin: 0 14%;
	}

	@media screen and (max-width: 1440px) {
		padding: 0 5%;
    margin: 0 10%;
	}

	@media screen and (max-width: 960px) {
		padding: 0 2%;
		margin: 0 5%;
	}

	@media screen and (max-width: 480px) {
		padding: 0 2%;
		margin: 0 1%;
	}
`;

export const PeopleWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	@media screen and (min-width: 320px) {
		
	}
`;
