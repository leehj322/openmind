import { useSuspenseQuery } from '@tanstack/react-query';
import getSubject from '../apis/getSubject';
import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';

/**
 
질문 대상의 id로 질문 대상 조회
@param {string} subjectId 대상 id
@returns response의 body값을 그대로 전달
*/
const useSubjectQuery = subjectId => {
  return useSuspenseQuery({
    queryKey: [SUBJECTS_QUERY_KEY, subjectId],
    queryFn: () => getSubject(subjectId),
  });
};

export default useSubjectQuery;
