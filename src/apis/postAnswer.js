import { ANSWERS_QUERY_KEY, QUESTIONS_QUERY_KEY } from '../constants/queryKeys';
import { axiosInstance } from './axiosSetup';

/**
 * 답변 id와 내용을 받아 서버로 답변 수정 요청을 하는 함수
 * @param {string} questionId 질문 id
 * @param {string} content 답변 내용
 * @returns {object | null} 응답 객체
 */
const postAnswer = async ({ questionId, content }) => {
  try {
    const { data } = await axiosInstance.post(`${QUESTIONS_QUERY_KEY}/${questionId}/${ANSWERS_QUERY_KEY}/`, {
      content: content,
      isRejected: false,
    });

    return data;
  } catch (error) {
    return null;
  }
};

export default postAnswer;
