import { useSuspenseQuery } from '@tanstack/react-query';
import getSubjects from '../apis/getSubjects';
import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';

const DEFAULT_SUBJECTS_LIMIT = 8;
const DEFAULT_SUBJECTS_OFFSET = 0;
const DEFAULT_SUBJECTS_SORT = 'name';

const useSubjectsQuery = (
  limit = DEFAULT_SUBJECTS_LIMIT,
  offset = DEFAULT_SUBJECTS_OFFSET,
  sort = DEFAULT_SUBJECTS_SORT
) => {
  return useSuspenseQuery({
    queryKey: [SUBJECTS_QUERY_KEY, limit, offset, sort],
    queryFn: () => getSubjects({ limit, offset, sort }),
  });
};

export default useSubjectsQuery;
