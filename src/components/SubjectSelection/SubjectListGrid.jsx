import styled from 'styled-components';
import PageNavigator from './PageNavigator';
import useSubjectsQuery from '../../queries/useSubjectsQuery';
import useWindowSize from '../../hooks/useWindowSize';
import { useState, useEffect } from 'react';
import createCenteredArray from '../../utils/createCenteredArray';

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

  // pageNumList 설정 로직 아래부터 handleNavBtnClick까지
  const totalPageCount = Math.ceil(count / limit);

  // 필요한 전체 페이지 수 (totalPageCount)가 5페이지보다 적으면 [1,2,3,4,5] 에서 필요한만큼만 slice
  useEffect(() => {
    if (totalPageCount < 5) {
      setPageNumList(prevPageNumList => prevPageNumList.slice(0, totalPageCount));
    }
  }, [totalPageCount]);

  const handleNavBtnClick = event => {
    const targetText = event.currentTarget.textContent;
    const isNumBtn = !!Number(targetText);

    const isFirstPageNumList = pageNumList[0] === 1;
    const isLastPageNumList = totalPageCount === pageNumList[pageNumList.length - 1];

    // event target의 textContent가 <, > 인경우 NaN 이므로 falsy값
    if (isNumBtn) {
      const nextCurrentPage = Number(targetText);
      setCurrentPage(nextCurrentPage);

      if (totalPageCount <= 5) {
        return;
      } else {
        // 1,2 page인 경우 [1,2,3,4,5] 반환
        // 끝, 끝-1 page인 경우 [~,~,~,끝-1,끝] 반환
        // 1,2 page와 가장 끝, 끝에서 2번째 페이지가 아닌 경우 setPageNumList
        const startBoundaryPage = [1, 2];
        const isStartBoundaryPage = startBoundaryPage.includes(nextCurrentPage);
        const endBoundaryPage = [totalPageCount - 1, totalPageCount];
        const isEndBoundaryPage = endBoundaryPage.includes(nextCurrentPage);

        const pageBtnListLength = 5;

        if (isStartBoundaryPage) {
          const nextBtnNumList = createCenteredArray(3, pageBtnListLength);
          setPageNumList(nextBtnNumList);
        } else if (isEndBoundaryPage) {
          const nextBtnNumList = createCenteredArray(totalPageCount - 2, pageBtnListLength);
          setPageNumList(nextBtnNumList);
        } else {
          const nextBtnNumList = createCenteredArray(nextCurrentPage, pageBtnListLength);
          setPageNumList(nextBtnNumList);
        }
      }
    } else {
      // 현재 페이지가 첫 페이지가 아니면 currentPage - 1
      if (targetText === '<' && currentPage !== 1) {
        const nextCurrentPage = currentPage - 1;
        setCurrentPage(nextCurrentPage);

        // currentPage가 마지막 끝 3번째 페이지 이하
        // !isFirstPageNumList : 처음 3번째 페이지가 아닌 경우
        // 왼쪽 버튼 눌렀을때 pageNumList값이 1씩 감소해야 함
        if (!isFirstPageNumList && currentPage <= totalPageCount - 2) {
          setPageNumList(prevPageNumList => prevPageNumList.map(pageNum => pageNum - 1));
        }
      }
      // 현재 페이지가 마지막 페이지가 아니면 currentPage + 1
      if (targetText === '>' && currentPage !== totalPageCount) {
        const nextCurrentPage = currentPage + 1;
        setCurrentPage(nextCurrentPage);

        // currentPage가 3페이지이상
        // !isLastPageNumList : 끝에서 3페이지가 아닌 경우
        // 오른쪽버튼 눌렀을때 pageNumList값이 1씩 증가해야 함
        if (!isLastPageNumList && currentPage >= 3) {
          setPageNumList(prevPageNumList => prevPageNumList.map(pageNum => pageNum + 1));
        }
      }
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
