import { ANSWERS_QUERY_KEY } from '../constants/queryKeys';
import { axiosInstance } from './axiosSetup';

const deleteAnswer = async ({ answerId }) => {
  try {
    const response = await axiosInstance.delete(`${ANSWERS_QUERY_KEY}/${answerId}/`);

    return response.status;
  } catch (error) {
    return error.response?.status;
  }
};

export default deleteAnswer;
