import { axiosInstance } from './axiosSetup';
import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';

const getSubjects = async ({ limit, offset }) => {
  const { data } = await axiosInstance.get(`${SUBJECTS_QUERY_KEY}/?limit=${limit}&offset=${offset}`);
  return data;
};

export default getSubjects;
