import { useMutation, useQueryClient } from '@tanstack/react-query';
import postReaction from '../apis/postReaction';
import { REACTION_QUERY_KEY } from '../constants/queryKeys';

const useSelectReactionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ questionId, type }) => postReaction({ questionId, type }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [REACTION_QUERY_KEY], exact: true, refetchType: 'none' });
      // 캐시를 무효화하지만 당장 서버로부터 재요청을 하지는 않음
    },
  });
};

export default useSelectReactionMutation;
