import styled from 'styled-components';

export const StyledAnswerFeedCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: var(--brown10);

  max-width: 716px;
  margin: 0px auto;
  padding: 16px;

  border: 1px solid var(--brown30);
  border-radius: 16px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 704px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 327px;
    margin: 0px auto;
  }
`;
