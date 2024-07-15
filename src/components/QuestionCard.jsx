import styled from 'styled-components';
import dummyCat from '../assets/images/cute_cat_img.png';
import receivedQuestionIcon from '../assets/images/Messages_icon.svg';

const QuestionCardContainer = styled.section`
  min-width: 186px;
  width: 20%;
  height: 187px;
  border-radius: 16px;
  border: 1px solid var(--gray40);
  padding: 20px;
`;

const ProfileImg = styled.img`
  width: 60px;
  border-radius: 9999px;
`;

const UserName = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  margin: 10px 0;
`;

const ReceivedQuestionArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20%;
  & div {
    display: flex;
  }
`;

const ReceivedQuestionIcon = styled.img`
  width: 18px;
`;

const ReceivedQuestionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--gray40);
`;

function QuestionCard() {
  return (
    <QuestionCardContainer>
      <ProfileImg src={dummyCat} alt="답변자 프로필 사진" />
      <UserName>이름</UserName>
      <ReceivedQuestionArea>
        <div>
          <ReceivedQuestionIcon src={receivedQuestionIcon} alt="받은 질문 아이콘" />
          <ReceivedQuestionText>받은 질문</ReceivedQuestionText>
        </div>
        <ReceivedQuestionText>n개</ReceivedQuestionText>
      </ReceivedQuestionArea>
    </QuestionCardContainer>
  );
}

export default QuestionCard;
