import styled from 'styled-components';
import receivedQuestionIcon from '../assets/images/messages_icon.png';
import filter from '../styles/@shared/filter';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

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
  useEffect(() => {
    if (subject) {
      // 세션 스토리지에서 기존 프로필 배열 가져오기
      const profiles = JSON.parse(sessionStorage.getItem('profiles')) || [];

      // 새로운 프로필 추가
      profiles.push({
        id: subject.id,
        name: subject.name,
        imageSource: subject.imageSource,
        questionCount: subject.questionCount,
        createdAt: subject.createdAt,
      });

      // Set을 이용해 중복 제거
      const uniqueProfiles = Array.from(new Set(profiles.map(p => p.id))).map(id => profiles.find(p => p.id === id));
      // 세션 스토리지에 업데이트된 프로필 배열 저장
      sessionStorage.setItem('profiles', JSON.stringify(uniqueProfiles));
    }
  }, [subject]);

  return (
    <Link to={`/post/${subject.id}`}>
      <StyledQuestionCardContainer>
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
    </Link>
  );
}

export default SubjectCard;
