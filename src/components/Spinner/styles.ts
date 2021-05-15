import styled, {keyframes} from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	min-height: 80vh;
	justify-content: center;
	align-items: center
`;

const spin = keyframes`
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
`

export const SpinElement = styled.div`
	border: 6px solid #E4E6E8;
	border-radius: 50%;
	border-top: 6px solid #72777D;
	width: 80px;
	height: 80px;
	-webkit-animation: ${spin} 2s linear infinite;
	animation: ${spin} 2s linear infinite;
`;
