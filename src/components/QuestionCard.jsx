import styled from 'styled-components';
import dummyCat from '../assets/images/cute_cat_img.png';
import receivedQuestionIcon from '../assets/images/messages_icon.png';

const StyledQuestionCardContainer = styled.section`
  min-width: 186px;
  width: 100%;
  height: 187px;
  border-radius: 16px;
  border: 1px solid var(--gray40);
  padding: 20px;
  @media (max-width: 767px) {
    height: 168px;
    padding: 16px;
  }
`;

const StyledProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media (max-width: 767px) {
    width: 48px;
    height: 48px;
  }
`;

const StyledUserName = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  margin: 12px 0;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const StyledReceivedQuestionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  & div {
    display: flex;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

const StyledReceivedQuestionIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  filter: brightness(0) saturate(100%) invert(59%) sepia(16%) saturate(0%) hue-rotate(213deg) brightness(83%)
    contrast(98%);
  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
`;

const StyledReceivedQuestionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--gray40);
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

function QuestionCard() {
  return (
    <StyledQuestionCardContainer>
      <StyledProfileImg src={dummyCat} alt="답변자 프로필 사진" />
      <StyledUserName>이름</StyledUserName>
      <StyledReceivedQuestionArea>
        <div>
          <StyledReceivedQuestionIcon src={receivedQuestionIcon} alt="받은 질문 아이콘" />
          <StyledReceivedQuestionText>받은 질문</StyledReceivedQuestionText>
        </div>
        <StyledReceivedQuestionText>n개</StyledReceivedQuestionText>
      </StyledReceivedQuestionArea>
    </StyledQuestionCardContainer>
  );
}

export default QuestionCard;
