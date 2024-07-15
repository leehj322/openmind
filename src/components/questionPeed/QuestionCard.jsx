import profileImg from '../../assets/images/samples/profile-sample.png';
import likeIcon from '../../assets/images/like-icon.png';
import dislikeIcon from '../../assets/images/dislike-icon.png';
import styled from 'styled-components';

function QuestionCard() {
  return (
    <StyledQuestionCardContainer>
      <StyledAnswerStatus>답변 완료</StyledAnswerStatus>
      <StyledQuestionTitleArea>
        <p>질문 · 2주전</p>
        <h3>좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?</h3>
      </StyledQuestionTitleArea>
      <StyledAnswerContainer>
        <StyledProfileImage src={profileImg} alt={'프로필 이미지'} />
        <StyledAnswerArea>
          <div>
            <span>아초는 고양이</span>
            <span>2주전</span>
          </div>
          <p>
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며,
            이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상,
            인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다.
            이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가
            우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을
            방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.
          </p>
        </StyledAnswerArea>
      </StyledAnswerContainer>
      <StyledReactionArea>
        <article>
          <img src={likeIcon} alt={'좋아요 아이콘'} />
          <span>좋아요</span>
        </article>
        <article>
          <img src={dislikeIcon} alt={'싫어요 아이콘'} />
          <span>싫어요</span>
        </article>
      </StyledReactionArea>
    </StyledQuestionCardContainer>
  );
}

export default QuestionCard;

const StyledQuestionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  max-width: 684px;
  padding: 32px;

  box-shadow: var(--shadow1pt);
  border-radius: 16px;
`;

const StyledAnswerStatus = styled.article`
  width: fit-content;
  padding: 4px 12px;
  border: ${({ theme }) => `1px solid ${theme.borderBrown}`};
  color: ${({ theme }) => theme.borderBrown};

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 8px;
`;

const StyledQuestionTitleArea = styled.section`
  & p {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--gray40);
  }

  & h3 {
    font-family: Actor;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: var(--gray60);
  }
`;

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
  }
`;

const StyledReactionArea = styled.section`
  display: flex;
  gap: 32px;
  height: 42px;
  align-items: flex-end;
  border-top: 1px solid var(--gray30);

  & article {
    display: flex;

    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;

    & img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }
  }
`;
