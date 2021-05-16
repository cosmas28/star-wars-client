import styled, {keyframes, css} from "styled-components";

const fadein = keyframes`
	from {
		bottom: 0;
		opacity: 0;
	}

	to {
		bottom: 30px;
		opacity: 1;
	}
`;

const fadeout = keyframes`
	from {
		bottom: 30px;
		opacity: 1;
	}
	to {
		bottom: 0;
		opacity: 0;
	}
`;

export const Container = styled.div<{active: boolean}>`
	visibility: hidden;
  min-width: 400px;
  margin-left: -125px;
  background-color: #202327;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;

	${({active}) =>
		active && css`
			visibility: visible;
  		animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
		`}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
	font-height: 20px;
`;

export const Message = styled.p`
	margin: 0;
	text-align: center;
`

export const CrossIconWrapper = styled.div`
	display: flex;
	align-items: center;
`;
