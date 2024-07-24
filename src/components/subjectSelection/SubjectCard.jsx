import styled, { keyframes } from 'styled-components';
import receivedQuestionIcon from '../../assets/images/messages_icon.png';
import { Link } from 'react-router-dom';

const waveAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const StyledQuestionCardContainer = styled(Link)`
  width: 100%;
  min-width: 112px;
  height: 187px;
  border-radius: 16px;
  border: 1px solid var(--gray40);
  padding: 20px;
  background-color: var(--gray10);
  transition: transform 1s ease-in-out;

  &:hover {
    cursor: pointer;
    position: relative;
    animation: ${waveAnimation} 1s infinite;
  }
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  filter: var(--gray50Filter);
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
  return (
    <StyledQuestionCardContainer to={`/post/${subject.id}`}>
      <StyledProfileImg src={subject.imageSource} alt="답변자 프로필 사진" />
      <StyledUserName>{subject.name}</StyledUserName>
      <StyledReceivedQuestionArea>
        <div>
          <StyledReceivedQuestionIcon src={receivedQuestionIcon} alt="받은 질문 아이콘" />
          <StyledReceivedQuestionText>받은 질문</StyledReceivedQuestionText>
        </div>
        <StyledReceivedQuestionText>{subject.questionCount}개</StyledReceivedQuestionText>
      </StyledReceivedQuestionArea>
    </StyledQuestionCardContainer>
  );
}

export default SubjectCard;
