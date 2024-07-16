import { axiosInstance } from './axiosSetup';
import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';

const getSubjects = async ({ limit, offset, sort }) => {
  const query = `${SUBJECTS_QUERY_KEY}/?limit=${limit}&offset=${offset}&sort=${sort}`;
  const { data } = await axiosInstance.get(query);
  return data;
};

export default getSubjects;
