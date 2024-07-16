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
`;

const StyledProfileImg = styled.img`
  width: 60px;
  border-radius: 9999px;
`;

const StyledUserName = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  margin: 10px 0;
`;

const StyledReceivedQuestionArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20%;
  & div {
    display: flex;
  }
`;

const StyledReceivedQuestionIcon = styled.img`
  width: 18px;
  filter: brightness(0) saturate(100%) invert(59%) sepia(16%) saturate(0%) hue-rotate(213deg) brightness(83%)
    contrast(98%);
`;

const StyledReceivedQuestionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--gray40);
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
