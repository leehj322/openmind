import styled from 'styled-components';

import HeroImgUrl from '../assets/images/HeroImage.png';
import profileImg from '../assets/images/profile.png';

import Header from '../components/feed/questionFeed/Header';
import QuestionCardList from '../components/feed/questionFeed/QuestionCardList';

const StyledQuestionFeedPageContainer = styled.div`
  margin: 0px auto;
  width: 1200px;

  background-color: var(--gray20);

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

const StyledHeroImg = styled.img`
  width: 1200px;
  height: 234px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    height: 177px;
  }
`;

function QuestionFeed() {
  const { imageSource, name } = sessionStorage.getItem('profile') || { imageSource: profileImg, name: '아초는고양이' };

  return (
    <StyledQuestionFeedPageContainer>
      <StyledHeroImgWrapper>
        <StyledHeroImg src={HeroImgUrl} alt="히어로 이미지" />
      </StyledHeroImgWrapper>
      {/* Header, QuestionCardList 컴포넌트에 데이터를 props로 전달 */}
      <Header imageSource={imageSource} name={name} />
      <QuestionCardList />
    </StyledQuestionFeedPageContainer>
  );
}

export default QuestionFeed;
