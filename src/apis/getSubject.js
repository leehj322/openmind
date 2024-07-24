import { axiosInstance } from './axiosSetup';
import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';

const getSubject = async subjectId => {
  try {
    const { data } = await axiosInstance.get(`${SUBJECTS_QUERY_KEY}/${subjectId}/`);

    return data;
  } catch (error) {
    return null;
  }
};

export default getSubject;
