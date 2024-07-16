<<<<<<< HEAD
import styled from 'styled-components';
import HeroImgUrl from '../assets/images/HeroImage.png';
import Header from '../components/QuestionFeed/Header';

const StyledQuestionFeedPageContainer = styled.div`
  margin: 0px auto;
  width: 1200px;
  background-color: var(--gray20);

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

const HeroImg = styled.img`
  width: 1200px;
  height: 234px;
`;

function QuestionFeed() {
  return (
    <StyledQuestionFeedPageContainer>
      <StyledHeroImgWrapper>
        <HeroImg src={HeroImgUrl} alt="히어로 이미지" />
      </StyledHeroImgWrapper>
      <Header />
    </StyledQuestionFeedPageContainer>
=======
import QuestionCard from '../components/feed/questionFeed/QuestionCard';

function QuestionFeed() {
  return (
    <div>
      <QuestionCard />
    </div>
>>>>>>> a571b94c74d9d8198e8a881b431e0098945feb96
  );
}

export default QuestionFeed;
