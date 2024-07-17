import { styled } from 'styled-components';
import profileImg from '../../assets/images/samples/profile-sample.png';
import getElapsedPeriod from '../../utils/getElapsedPeriod';

/**
 * 답변자의 프로필과 질문 시점으로부터 지난 기간을 보여주고, 답변 내용을 담을 템플릿
 * @param props
 * @param {Node} props.children 자식 노드
 * @param {string} props.answerCreatedAt 답변 생성 시기
 */
function AnswerTemplate({ children, answerCreatedAt }) {
  const { imageSource, name } = sessionStorage.getItem('profile') || { imageSource: profileImg, name: '아초는 고양이' };
  const elapsedPeriod = answerCreatedAt ? getElapsedPeriod(answerCreatedAt) : ''; // 아직 답변이 없는 경우

  return (
    <StyledAnswerContainer>
      <StyledProfileImage src={imageSource} alt={'프로필 이미지'} />
      <StyledAnswerArea>
        <div>
          <span>{name}</span>
          <span>{elapsedPeriod}</span>
        </div>
        {children}
      </StyledAnswerArea>
    </StyledAnswerContainer>
  );
}

export default AnswerTemplate;

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
  width: 100%;

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
`;
