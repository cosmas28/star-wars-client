import styled from "styled-components";

export const MainSection = styled.section`
	width: 100%;
`;

export const InnerSection = styled.section`
	margin: 2% 33% 0;
	padding: 0 5%;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const AvatarWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 8px;
`;

export const NameWrapper = styled.div`
	font-weight: 500;
	font-size: 20px;
	line-height: 28px;
	color: #202327;
`;

export const ContentWrapper = styled.div`
	margin-top: 56px;
	padding: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #E4E6E8;
  margin: 16px 0;
`;

export const RowWrapper = styled.div`
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

export const Footer = styled.div`
	margin-top: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
