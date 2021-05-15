import styled from "styled-components";

export const MainSection = styled.section`
	width: 100%;
`;

export const InnerSection = styled.section`
	@media screen and (min-width: 1441px) {
		margin: 2% 28% 0;
		padding: 0 5%;
	}

	@media screen and (max-width: 1440px) {
		margin: 2% 25% 0;
		padding: 0 5%;
	}

	@media screen and (max-width: 960px) {
		padding: 0 3.5%;
		margin: 2% 10% 0;
	}

	@media screen and (max-width: 480px) {
		padding: 0 4%;
		margin: 2% 0 0;
	}
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const ContentWrapper = styled.div`
	margin-top: 24px;
	padding: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #E4E6E8;
  margin: 16px 0;
`;


export const Footer = styled.div`
	margin-top: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
