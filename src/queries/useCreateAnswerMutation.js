import { useMutation, useQueryClient } from '@tanstack/react-query';
import postAnswer from '../apis/postAnswer';
import { ANSWERS_QUERY_KEY } from '../constants/queryKeys';

const useCreateAnswerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ questionId, content }) => postAnswer({ questionId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ANSWERS_QUERY_KEY], exact: true, refetchType: 'none' });
      // 캐시를 무효화하지만 당장 서버로부터 재요청을 하지는 않음
    },
  });
};

export default useCreateAnswerMutation;
