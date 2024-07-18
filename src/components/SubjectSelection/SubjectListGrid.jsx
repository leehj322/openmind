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
  // 화살표 버튼이 보일지 안보일지 설정
  // both: 둘 다 보임, left: 왼쪽만 보임, right: 오른쪽만 보임, none: 둘다 안보임
  const [arrowBtnVisible, setArrowBtnVisible] = useState('both');

  // 현재 페이지의 grid 형태에 따라 limit값 수정 및
  // currentPage 값에 따라서 offset 계산 후 GET 요청 전송
  const limit = windowSize.width > GRID_BREAKPOINT.tablet ? NUM_OF_SUBJECTS.pc : NUM_OF_SUBJECTS.other;
  const offset = limit * (currentPage - 1);
  const { data } = useSubjectsQuery(limit, offset, sortBy);
  const { count, results } = data;

  // 필요한 전체 페이지 수 계산
  // 해당 값이 5페이지 미만이면 기존 pageNumList 값인 [1, 2, 3, 4, 5]에서 필요한 만큼만 slice
  const totalPageCount = Math.ceil(count / limit);
  useEffect(() => {
    if (totalPageCount < 5) {
      setPageNumList(prevPageNumList => prevPageNumList.slice(0, totalPageCount));
    }
  }, [totalPageCount]);

  /**
   * 페이지 네이션 네비게이터의 버튼을 클릭했을때의 동작 핸들러
   */
  const handleNavBtnClick = event => {
    const targetText = event.currentTarget.textContent;
    const isNumBtn = !!Number(targetText);

    /**
     * pageNumList의 중앙값을 받아서 pageNumList 상태를 업데이트 해주는 함수
     * @param {num} centerValue pageNumList의 중앙 값
     */
    const updateCenteredBtnNumList = centerValue => {
      const pageBtnListLength = 5;
      const nextBtnNumList = createCenteredArray(centerValue, pageBtnListLength);
      setPageNumList(nextBtnNumList);
    };

    /**
     * 누른 버튼이 숫자 버튼인 경우의 동작
     */
    const handleNumBtnClick = () => {
      // currentPage 업데이트
      const nextCurrentPage = Number(targetText);
      setCurrentPage(nextCurrentPage);

      if (totalPageCount <= 5) {
        return;
      } else {
        // pageNumList 업데이트 로직
        // 1,2 page인 경우 [1, 2, 3, 4, 5]
        // 끝, 끝-1 page인 경우 [..., 끝-1, 끝]
        // 이외의 경우 선택된 숫자를 중앙으로 하는 array
        const startBoundaryPage = [1, 2];
        const endBoundaryPage = [totalPageCount - 1, totalPageCount];
        const isStartBoundaryPage = startBoundaryPage.includes(nextCurrentPage);
        const isEndBoundaryPage = endBoundaryPage.includes(nextCurrentPage);

        if (isStartBoundaryPage) {
          updateCenteredBtnNumList(3);
        } else if (isEndBoundaryPage) {
          updateCenteredBtnNumList(totalPageCount - 2);
        } else {
          updateCenteredBtnNumList(nextCurrentPage);
        }
      }
    };

    /**
     * 누른 버튼이 화살표 버튼인 경우 동작
     */
    const handleArrowBtnClick = () => {
      // 현재 페이지가 첫 페이지가 아니면 currentPage - 1
      if (targetText === '<' && currentPage !== 1) {
        const nextCurrentPage = currentPage - 1;
        setCurrentPage(nextCurrentPage);

        // currentPage가 마지막 끝 3번째 페이지 이하
        // !isFirstPageNumList : 처음 3번째 페이지가 아닌 경우
        // 왼쪽 버튼 눌렀을때 pageNumList값이 1씩 감소해야 함
        const isFirstPageNumList = pageNumList[0] === 1;
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
        const isLastPageNumList = totalPageCount === pageNumList[pageNumList.length - 1];
        if (!isLastPageNumList && currentPage >= 3) {
          setPageNumList(prevPageNumList => prevPageNumList.map(pageNum => pageNum + 1));
        }
      }
    };

    // 실제 handleNavBtnClick의 동작
    if (isNumBtn) {
      handleNumBtnClick();
    } else {
      handleArrowBtnClick();
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
      <PageNavigator
        currentPage={currentPage}
        pageNumList={pageNumList}
        onNavBtnClick={handleNavBtnClick}
        arrowBtnVisible={arrowBtnVisible}
      />
    </>
  );
}

export default SubjectListGrid;
