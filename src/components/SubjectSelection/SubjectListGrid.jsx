import styled from 'styled-components';
import useSubjectsQuery from '../../queries/useSubjectsQuery';

const SubjectList = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 868px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TestQuestionCard = styled.li`
  background-color: black;
  color: white;
  width: 100%;
`;

function SubjectListGrid({ sortBy }) {
  const LIMIT = 8;
  const OFFSET = 0;
  const { data } = useSubjectsQuery(LIMIT, OFFSET, sortBy);
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
