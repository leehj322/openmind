import { ANSWERS_QUERY_KEY } from '../constants/queryKeys';
import { axiosInstance } from './axiosSetup';

const putAnswer = async ({ answerId, content }) => {
  try {
    const response = await axiosInstance.put(`${ANSWERS_QUERY_KEY}/${answerId}/`, {
      content: content,
      isRejected: false,
    });

    return response.status;
  } catch (error) {
    return error.response?.status;
  }
};

export default putAnswer;
