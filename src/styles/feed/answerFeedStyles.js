import styled from 'styled-components';

export const StyledAnswerFeedArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  max-width: 716px;
  margin: 145px auto 140px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 704px;
    margin: 135px auto 140px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 327px;
    margin: 145px auto 168px;
  }
`;
