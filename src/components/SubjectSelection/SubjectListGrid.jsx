import styled from 'styled-components';
import PageNavigator from './PageNavigator';
import useSubjectsQuery from '../../queries/useSubjectsQuery';
import useWindowSize from '../../hooks/useWindowSize';
import { useState, useEffect } from 'react';

// 다른 반응형과 다른 px값에서 GRID가 바뀌어서 GRID_BREAKPOINT 상수 추가
const GRID_BREAKPOINT = { tablet: 868, mobile: 767 };
const NUM_OF_SUBJECTS = { pc: 8, other: 6 }; // limit 값 담은 상수

const SubjectList = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: ${GRID_BREAKPOINT.tablet}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 375px) and (max-width: ${GRID_BREAKPOINT.mobile}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function SubjectListGrid({ sortBy }) {
  const windowSize = useWindowSize();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumList, setPageNumList] = useState([1, 2, 3, 4, 5]);

  // 현재 페이지의 grid 형태에 따라 limit값 수정 및
  // currentPage 값에 따라서 offset 계산 후 GET 요청 전송
  const limit = windowSize.width > GRID_BREAKPOINT.tablet ? NUM_OF_SUBJECTS.pc : NUM_OF_SUBJECTS.other;
  const offset = limit * (currentPage - 1);
  const { data } = useSubjectsQuery(limit, offset, sortBy);
  const { count, results } = data;

  // 페이지 번호 리스트 계산 및 변경 로직
  const totalPageCount = Math.ceil(count / limit);

  // 필요한 전체 페이지 수 (totalPageCount)가 5페이지보다 적으면 [1,2,3,4,5] 에서 필요한만큼만 slice
  useEffect(() => {
    if (totalPageCount < 5) {
      setPageNumList(prevPageNumList => prevPageNumList.slice(undefined, totalPageCount));
    }
  }, [totalPageCount]);

  const handleNavBtnClick = event => {
    const targetText = event.currentTarget.textContent;
    const nextCurrentPage = Number(targetText);

    // event target의 textContent가 <, > 인경우 NaN 이므로 falsy값
    if (nextCurrentPage) {
      setCurrentPage(nextCurrentPage);
    } else {
      if (targetText === '<') {
        // 현재 페이지가 첫 페이지가 아니면 currentPage - 1
        if (currentPage !== 1) {
          setCurrentPage(prevCurrentPage => prevCurrentPage - 1);
        }
      }
      if (targetText === '>') {
        // 현재 페이지가 마지막 페이지가 아니면 currentPage + 1
        if (currentPage !== totalPageCount) {
          setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
        }
      }
    }

    // pageNumList의 마지막 값이 마지막 페이지 or 첫번째 값이 1페이지 인 경우 pageNumList 변경 X
    const isLastPageNumList = totalPageCount >= pageNumList[pageNumList.length - 1];
    const isFirstPageNumList = pageNumList[0] === 1;
    if (isFirstPageNumList || isLastPageNumList) {
      return;
    } else {
      // currentPage값이 3, 4번 index 값인 경우 3번이면 +1, 4번이면 +2
      // currentPage값이 1, 2번 index 값인 경우 1번이면 -2, 2번이면 -1
      console.log('페이지번호바꿔');
    }
  };

  return (
    <>
      <SubjectList>
        {results.map(result => (
          <div key={result.id}>{result.name}</div>
        ))}
        {/* 아래 값은 실제로 QuestionCard가 완성되면 사용 */}
        {/* {results.map(result => (
          <QuestionCard key={result.id} subject={result} />
        ))} */}
      </SubjectList>
      <PageNavigator currentPage={currentPage} pageNumList={pageNumList} onNavBtnClick={handleNavBtnClick} />
    </>
  );
}

export default SubjectListGrid;
