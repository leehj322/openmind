import { styled } from 'styled-components';
import profileImg from '../../assets/images/samples/profile-sample.png';
import getElapsedPeriod from '../../utils/getElapsedPeriod';

/**
 * 답변 내용과 답변 거절 유무를 보여준다
 * @param props
 * @param {string} props.answer 답변 내용
 * @param {string} props.isRejected 답변 거절 유무
 * @param {string} props.answerCreatedAt 답변 생성 시간
 */
function Answer({ answerCreatedAt, answer, isRejected }) {
  const elapedPeriod = getElapsedPeriod(answerCreatedAt);

  return (
    <StyledAnswerContainer>
      <StyledProfileImage src={profileImg} alt={'프로필 이미지'} />
      <StyledAnswerArea $isRejected={isRejected}>
        <div>
          <span>아초는 고양이</span>
          <span>{elapedPeriod}</span>
        </div>
        <p>{isRejected ? '답변 거절' : answer}</p>
      </StyledAnswerArea>
    </StyledAnswerContainer>
  );
}

export default Answer;

const StyledAnswerContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledProfileImage = styled.img`
  width: 48px;
  height: 48px;
  @media ${({ theme }) => theme.windowSize.mobile} {
    width: 32px;
    height: 32px;
  }
`;

const StyledAnswerArea = styled.section`
  & div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;

    & span:first-child {
      font-family: Actor;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
    }
    & span:nth-child(2) {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      color: var(--gray40);
    }
  }

  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: ${({ $isRejected }) => $isRejected && 'var(--red)'};
  }
`;
