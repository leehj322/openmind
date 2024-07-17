import styled from 'styled-components';
import dummyCat from '../assets/images/cute_cat_img.png';
import receivedQuestionIcon from '../assets/images/messages_icon.png';
import filter from '../styles/@shared/filter';
import { Link } from 'react-router-dom';

const StyledQuestionCardContainer = styled.li`
  min-width: 186px;
  width: 100%;
  height: 187px;
  border-radius: 16px;
  border: 1px solid var(--gray40);
  padding: 20px;
  background-color: var(--gray10);
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
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

const StyledReceivedQuestionIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
  filter: ${filter.gray50};
  @media (max-width: 767px) {
    width: 16px;
    height: 16px;
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

function SubjectCard({ subject }) {
  if (subject) {
    const profile = {
      id: subject.id,
      name: subject.name,
      imageSource: subject.imageSource,
      questionCount: subject.questionCount,
      createdAt: subject.createdAt,
    };

    // JSON 문자열로 변환하여 세션 스토리지에 저장
    sessionStorage.setItem('profile', JSON.stringify(profile));
  }

  return (
    <Link to={`/post/${subject.id}`}>
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
    </Link>
  );
}

export default SubjectCard;
