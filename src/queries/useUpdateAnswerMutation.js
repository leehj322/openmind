import { useMutation, useQueryClient } from '@tanstack/react-query';
import putAnswer from '../apis/putAnswer';
import { ANSWERS_QUERY_KEY } from '../constants/queryKeys';

const useUpdateAnswerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ answerId, content }) => putAnswer({ answerId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ANSWERS_QUERY_KEY], exact: true, refetchType: 'none' });
    },
  });
};

export default useUpdateAnswerMutation;
