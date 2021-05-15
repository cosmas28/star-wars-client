import styled from "styled-components";

export const Container = styled.div`
	display: block;
	height: auto;
	width: 47%;
	padding: 12px;

	@media screen and (min-width: 1440px) {
		width: 47.6%;
	}

	@media screen and (max-width: 960px) {
		width: 100%
	}

	@media screen and (max-width:480px) {
		width: 100%;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: row;
	border-radius: 8px;
	border: 1px solid #D3D6D9;
	box-sizing: border-box;
	text-align: left;
	padding: 16px;
	background: white;
	box-shadow: 0px 4px 16px #D3D6D9;
	align-items: center;

	&:hover {
		border-color: #B3B7BC;
		box-shadow: 0px 4px 16px #B3B7BC;
	}
`;

export const Head = styled.h5`
	font-size: 16px;
  line-height: 18px;
  font-weight: 500;
	margin: 0 0 8px;
`;

export const DetailsRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	@media screen and (max-width: 480px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

export const DetailsText = styled.p`
	font-size: 14px;
	line-height: 20px;
	font-weight: 400;
	color: #72777D;
	margin: 0;
`;

export const DetailsLink = styled(DetailsText)`
	color: #2097F9;
	cursor: pointer;
`;

export const DetailsWrapper = styled.div`
	flex: 1 1 auto;
`;

export const ChevronRightWrapper = styled.div`
	flex: 0 1 auto;
	color: #72777D;
	cursor: pointer;

	&:hover {
		color: #4A4E55;
	}
`;

export const DotDivider = styled.span`
	content: '';
	width: 3px;
	height: 3px;
	margin: 0 8px;
	border-radius: 50%;
	background: #B3B7BC;
	display: inline-block;
	vertical-align: middle;
`;

export const AvataWrapper = styled.div`
	display: flex;
	flex: 0 1 auto;
	align-items: center;
`;

export const Content = styled.div`
	padding: 24px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex: 1 0;
`;
