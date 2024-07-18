import styled, { css, keyframes } from 'styled-components';

export const StyledFeedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  max-width: 684px;
  padding: 32px 32px 20px 32px;

  box-shadow: var(--shadow1pt);
  border-radius: 16px;
`;

export const StyledAnswerText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ $isRejected }) => $isRejected && 'var(--red)'};
`;

export const shakeLeft = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 0 50%;
  }
  10% {
    transform: rotate(6deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-8deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(8deg);
  }
  80% {
    transform: rotate(-6deg);
  }
  90% {
    transform: rotate(6deg);
  }
`;

export const jelloHorizontal = keyframes`
0% {
  transform: scale3d(1, 1, 1);
}
30% {
  transform: scale3d(1.25, 0.75, 1);
}
40% {
  transform: scale3d(0.75, 1.25, 1);
}
50% {
  transform: scale3d(1.15, 0.85, 1);
}
65% {
  transform: scale3d(0.95, 1.05, 1);
}
75% {
  transform: scale3d(1.05, 0.95, 1);
}
100% {
  transform: scale3d(1, 1, 1);
}
`;

export const jelloHorizontalAnimation = css`
  animation: ${jelloHorizontal} 1.1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
`;
export const shakeLeftAnimation = css`
  animation: ${shakeLeft} 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
`;
