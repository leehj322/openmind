import styled from 'styled-components';

import HeroImgUrl from '../assets/images/HeroImage.png';
import profileImg from '../assets/images/profile.png';
import MessagesIconUrl from '../assets/images/ic_Messages.svg';
import noQuestionImg from '../assets/images/no-question.png';

import Header from '../components/feed/questionFeed/Header';
import QuestionCardList from '../components/feed/questionFeed/QuestionCardList';
import { StyledFeedCardListContainer } from '../styles/feed/feedCardListStyles';
import { StyledQuestionCountArea } from '../styles/feed/questionCountStyles';
import { StyledHeroImg } from '../styles/feed/heroImgStyles';
import { StyledMessagesImg } from '../styles/feed/messagesImgStyles';
import { StyledNoQuestionImg } from '../styles/feed/noQuestionImgStyles';

const StyledQuestionFeedPageContainer = styled.div`
  margin: 0px auto;
  width: 1200px;

  background-color: ${({ theme }) => theme.gray20};

  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: auto;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: auto;
  }
`;

const StyledHeroImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function QuestionFeed() {
  // 세션 스토리지에서 반환된 값 역직렬화
  const profileDataString = sessionStorage.getItem('profile');
  const profileData = profileDataString ? JSON.parse(profileDataString) : null;

  // 구조 분해 할당
  const { id, name, imageSource, questionCount } = profileData || {
    // 기본값
    id: 7478,
    name: '아초는고양이',
    imageSource: profileImg,
    questionCount: 25,
  };

  if (questionCount !== 0) {
    return (
      <StyledQuestionFeedPageContainer>
        <StyledHeroImgWrapper>
          <StyledHeroImg src={HeroImgUrl} alt="히어로 이미지" />
        </StyledHeroImgWrapper>
        {/* Header, QuestionCardList 컴포넌트에 데이터를 props로 전달 */}
        <Header name={name} imageSource={imageSource} />
        <QuestionCardList subjectId={id} questionCount={questionCount} />
      </StyledQuestionFeedPageContainer>
    );
  } else {
    // 질문이 없는 경우 조건부 렌더링
    return (
      <StyledQuestionFeedPageContainer>
        <StyledHeroImgWrapper>
          <StyledHeroImg src={HeroImgUrl} alt="히어로 이미지" />
        </StyledHeroImgWrapper>
        {/* Header, QuestionCardList 컴포넌트에 데이터를 props로 전달 */}
        <Header name={name} imageSource={imageSource} />
        <StyledFeedCardListContainer>
          <StyledQuestionCountArea>
            <StyledMessagesImg src={MessagesIconUrl} alt="말풍선 아이콘" />
            아직 질문이 없습니다
          </StyledQuestionCountArea>
          <StyledNoQuestionImg src={noQuestionImg} alt="빈 박스 이미지" />
        </StyledFeedCardListContainer>
      </StyledQuestionFeedPageContainer>
    );
  }
}

export default QuestionFeed;
