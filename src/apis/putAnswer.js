import { ANSWERS_QUERY_KEY } from '../constants/queryKeys';
import { axiosInstance } from './axiosSetup';

//TODO: 응답객체 넘겨야함
/**
 * 답변 id와 내용을 받아 서버로 답변 수정 요청을 하는 함수
 * @param {string} answerId 답변 id
 * @param {string} content 답변 내용
 * @returns {string} 응답 상태
 */
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
