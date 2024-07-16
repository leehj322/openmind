import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HeroImgUrl from '../assets/images/HeroImage.png';
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

const HeroImg = styled.img`
  width: 1200px;
  height: 234px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    height: 177px;
  }
`;

function QuestionFeed() {
  const [questionCount, setQuestionCount] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // URL에서 subjectId 추출
    const pathname = window.location.pathname; // 현재 페이지의 URL 경로
    const parts = pathname.split('/'); // 경로를 '/' 기준으로 분리
    const idFromUrl = parts[2]; // subjectId가 위치한 인덱스에 따라 설정

    if (idFromUrl) {
      const subjectId = idFromUrl;
      // subjectId에 따라 엔드포인트 설정
      const apiUrl = `https://openmind-api.vercel.app/8-4/subjects/${subjectId}/questions/`;

      axios.get(apiUrl).then(response => {
        setQuestionCount(response.data.count); // count 값을 상태에 설정
        setQuestions(response.data.results); // results 배열을 상태에 설정
      });
    }
  }, []);

  return (
    <StyledQuestionFeedPageContainer>
      <StyledHeroImgWrapper>
        <HeroImg src={HeroImgUrl} alt="히어로 이미지" />
      </StyledHeroImgWrapper>
      <Header />
      {/* QuestionCardList 컴포넌트에 데이터를 props로 전달 */}
      <QuestionCardList questionCount={questionCount} questions={questions} />
    </StyledQuestionFeedPageContainer>
  );
}

export default QuestionFeed;
