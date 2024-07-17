import { ANSWERS_QUERY_KEY } from '../constants/queryKeys';
import { axiosInstance } from './axiosSetup';

/**
 * 답변 id와 내용을 받아 서버로 답변 수정 요청을 하는 함수
 * @param {string} answerId 답변 id
 * @param {string} content 답변 내용
 * @returns {object | null} 응답 객체
 */
const putAnswer = async ({ answerId, content }) => {
  try {
    const { data } = await axiosInstance.put(`${ANSWERS_QUERY_KEY}/${answerId}/`, {
      content: content,
      isRejected: false,
    });

    return data;
  } catch (error) {
    return null;
  }
};

export default putAnswer;
