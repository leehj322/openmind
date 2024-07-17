import styled from 'styled-components';
import PageNavigator from './PageNavigator';
import useSubjectsQuery from '../../queries/useSubjectsQuery';
import useWindowSize from '../../hooks/useWindowSize';

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

  // 현재 페이지의 grid 형태에 따라 limit값 수정 후 GET 요청 전송
  const limit = windowSize.width > GRID_BREAKPOINT.tablet ? NUM_OF_SUBJECTS.pc : NUM_OF_SUBJECTS.other;
  const offset = 0;
  const { data } = useSubjectsQuery(limit, offset, sortBy);
  const { count, results } = data;

  return (
    <>
      <SubjectList>
        123
        {/* 아래 값은 실제로 QuestionCard가 완성되면 사용 */}
        {/* {results.map(result => (
        <QuestionCard key={result.id} subject={result} />
      ))} */}
      </SubjectList>
      <PageNavigator />
    </>
  );
}

export default SubjectListGrid;
