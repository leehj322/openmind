/* eslint-disable no-console */
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';

import { StyledFeedCardListContainer } from '../../../styles/feed/feedCardListStyles';
import { StyledQuestionCountArea } from '../../../styles/feed/questionCountStyles';

import MessagesIconUrl from '../../../assets/images/ic_Messages.svg';
import SpinnerImg from '../../../assets/images/spinner.png';
import QuestionCard from './QuestionCard';
import { axiosInstance } from '../../../apis/axiosSetup';

const StyledMessagesImg = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  width: 48px;
  height: 48px;
  margin: 20px auto;
  background-image: url('${SpinnerImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotate} 1.5s linear infinite;
`;

function QuestionCardList({ questionCount, subjectId }) {
  // 관찰하는 객체를 ref로 설정
  const [observerRef, inView] = useInView();
  // useInfiniteQuery 훅을 사용하여 무한 스크롤 데이터를 관리
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery({
    queryKey: ['questions', subjectId],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        // subjectId가 없으면 빈 데이터를 반환하여 오류 방지
        if (!subjectId) {
          return { pages: [] };
        }
        const { data: responseData } = await axiosInstance.get(`/subjects/${subjectId}/questions/`, {
          params: {
            limit: 5,
            offset: pageParam * 5, // 페이지 번호에 따라 오프셋 계산
          },
        });
        return responseData;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
    },
    // 마지막 페이지의 실제 데이터 수를 기반으로 계산
    // lastPage.results.length: 현재 페이지의 데이터 수
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length === 0 ? undefined : allPages.length + 1;
    },
  });

  // 스크롤 시에 observerRef가 노출되면 다음 페이지를 불러오는 함수 실행
  useEffect(() => {
    if (inView) {
      console.log('data fetch');
      fetchNextPage();
    }
  }, [inView]);

  // 데이터가 로딩 중이거나 오류가 발생하면 해당 상태를 처리
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }
  // data가 없는 경우 예외처리
  if (!data || !data.pages) {
    return null;
  }

  return (
    <StyledFeedCardListContainer>
      <StyledQuestionCountArea>
        <StyledMessagesImg src={MessagesIconUrl} />
        {questionCount}개의 질문이 있습니다
      </StyledQuestionCountArea>
      {data.pages.map(page =>
        page.results.map(question => (
          <QuestionCard
            key={question.id}
            questionId={question.id}
            question={question.content}
            likeCount={question.like}
            dislikeCount={question.dislike}
            questionCreateAt={question.createdAt}
            answer={question.answer}
            isHasAnswer={!!question.answer}
            subjectId={subjectId}
          />
        ))
      )}
      {hasNextPage && (
        <div ref={observerRef}>
          <StyledSpinner />
        </div>
      )}
    </StyledFeedCardListContainer>
  );
}

export default QuestionCardList;
