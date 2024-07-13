import { useSuspenseQuery } from '@tanstack/react-query';
import getSubjects from '../apis/getSubjects';
import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';

const DEFAULT_SUBJECTS_LIMIT = 100;
const DEFAULT_SUBJECTS_OFFSET = 0;

const useSubjectsQuery = (limit = DEFAULT_SUBJECTS_LIMIT, offset = DEFAULT_SUBJECTS_OFFSET) => {
  return useSuspenseQuery({
    queryKey: [SUBJECTS_QUERY_KEY, limit, offset],
    queryFn: () => getSubjects(limit, offset),
  });
};

export default useSubjectsQuery;
