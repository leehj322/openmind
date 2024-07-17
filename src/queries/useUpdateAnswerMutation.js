import { useMutation, useQueryClient } from '@tanstack/react-query';
import putAnswer from '../apis/putAnswer';
import { ANSWERS_QUERY_KEY } from '../constants/queryKeys';

const useUpdateAnswerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ answerId, content }) => putAnswer({ answerId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ANSWERS_QUERY_KEY], exact: true, refetchType: 'none' });
      // 캐시를 무효화하지만 당장 서버로부터 재요청을 하지는 않음
    },
  });
};

export default useUpdateAnswerMutation;
