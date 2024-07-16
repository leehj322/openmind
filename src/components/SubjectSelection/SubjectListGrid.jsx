import styled from 'styled-components';
import useSubjectsQuery from '../../queries/useSubjectsQuery';
import useWindowSize from '../../hooks/useWindowSize';

const GRID_BREAKPOINT = { tablet: 868, mobile: 767 };
const NUM_OF_SUBJECTS = { pc: 8, other: 6 };

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

// 테스트용 카드 (QuestionCard 완성되면 제거)
const TestQuestionCard = styled.li`
  background-color: black;
  color: white;
  width: 100%;
`;

// 해야하는 것
// getSubjects.js에서 error loading 처리
// 페이지네이션
function SubjectListGrid({ sortBy }) {
  const windowSize = useWindowSize();

  // 반응형 fetch
  const limit = windowSize.width > GRID_BREAKPOINT.tablet ? NUM_OF_SUBJECTS.pc : NUM_OF_SUBJECTS.other;
  const offset = 0;
  const { data } = useSubjectsQuery(limit, offset, sortBy);
  const { count, results } = data;

  return (
    <SubjectList>
      {results.map(result => (
        <TestQuestionCard key={result.id}>{result.name}</TestQuestionCard>
      ))}
    </SubjectList>
  );
}

export default SubjectListGrid;
