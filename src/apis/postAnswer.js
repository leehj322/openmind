import { ANSWERS_QUERY_KEY, QUESTIONS_QUERY_KEY } from '../constants/queryKeys';
import { axiosInstance } from './axiosSetup';

const postAnswer = async ({ questionId, content }) => {
  try {
    const response = await axiosInstance.post(`${QUESTIONS_QUERY_KEY}/${questionId}/${ANSWERS_QUERY_KEY}/`, {
      content: content,
      isRejected: false,
    });

    return response.status;
  } catch (error) {
    return error.response?.status;
  }
};

export default postAnswer;
