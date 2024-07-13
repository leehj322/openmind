import { Suspense } from 'react';
import SubjectQueryTest from '../components/SubjectQueryTest';

function QuerySample() {
  return (
    <Suspense>
      <SubjectQueryTest />
    </Suspense>
  );
}

export default QuerySample;
