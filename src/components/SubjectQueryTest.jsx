import useSubjectsQuery from '../queries/useSubjectsQuery';

function SubjectQueryTest() {
  // 팀원분들 예시용 샘플 컴포넌트입니다.
  const { data } = useSubjectsQuery();

  return <div>{JSON.stringify(data)}</div>;
}

export default SubjectQueryTest;
