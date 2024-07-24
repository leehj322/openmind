import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';
import { axiosInstance } from './axiosSetup';

const deleteSubject = async ({ subjectId }) => {
  try {
    const response = await axiosInstance.delete(`/${SUBJECTS_QUERY_KEY}/${subjectId}/`);

    return response.status;
  } catch (error) {
    return error.response?.status;
  }
};

export default deleteSubject;
