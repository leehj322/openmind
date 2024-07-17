import styled from 'styled-components';

export const StyledFeedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  max-width: 684px;
  padding: 32px;

  box-shadow: var(--shadow1pt);
  border-radius: 16px;
`;

export const StyledAnswerText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ $isRejected }) => $isRejected && 'var(--red)'};
`;
